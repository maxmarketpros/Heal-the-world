/**
 * catalog.ts — Server-only module for CSV-based product catalog.
 *
 * Parses Shopify export CSVs for guitars and drumheads.
 * Merges multi-row products by URL handle, carries forward non-null fields,
 * and applies image-ordering heuristics (COA images pushed to end).
 */

import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface ProductImage {
    url: string;
    position: number;
    alt: string;
}

export interface Product {
    handle: string;
    title: string;
    descriptionHtml: string;
    tags: string[];
    type: string;
    images: ProductImage[];
    /** First tag is usually the artist name */
    artist: string;
    /** Make/model extracted from tags (second+third tag joined) */
    makeModel: string;
}

/* ------------------------------------------------------------------ */
/*  CSV row interface (only the columns we care about)                 */
/* ------------------------------------------------------------------ */

interface CsvRow {
    Title: string;
    "URL handle": string;
    Description: string;
    Type: string;
    Tags: string;
    "Product image URL": string;
    "Image position": string;
    "Image alt text": string;
}

/* ------------------------------------------------------------------ */
/*  COA detection keywords                                             */
/* ------------------------------------------------------------------ */

const COA_KEYWORDS = [
    "coa",
    "certificate",
    "doc",
    "letter",
    "psa",
    "jsa",
    "beckett",
    "real",
    "page",
];

function isCOAImage(url: string): boolean {
    const lower = decodeURIComponent(url).toLowerCase();
    return COA_KEYWORDS.some((kw) => lower.includes(kw));
}

/* ------------------------------------------------------------------ */
/*  Image ordering                                                     */
/* ------------------------------------------------------------------ */

function orderImages(images: ProductImage[]): ProductImage[] {
    // Separate COA images from instrument images
    const instrument: ProductImage[] = [];
    const coa: ProductImage[] = [];

    for (const img of images) {
        if (isCOAImage(img.url)) {
            coa.push(img);
        } else {
            instrument.push(img);
        }
    }

    // Sort each group by position ASC
    instrument.sort((a, b) => a.position - b.position);
    coa.sort((a, b) => a.position - b.position);

    // Instrument images first, COA images last
    return [...instrument, ...coa];
}

/* ------------------------------------------------------------------ */
/*  Tag parsing helpers                                                */
/* ------------------------------------------------------------------ */

function parseTags(raw: string): string[] {
    if (!raw) return [];
    // Tags may be semicolon-separated OR comma-separated within quotes
    return raw
        .split(/[;,]/)
        .map((t) => t.trim())
        .filter((t) => t.length > 0 && !t.startsWith("category:"));
}

function extractArtist(tags: string[]): string {
    return tags.length > 0 ? tags[0] : "";
}

function extractMakeModel(tags: string[]): string {
    if (tags.length > 1) {
        return tags.slice(1).join(" ");
    }
    return "";
}

/* ------------------------------------------------------------------ */
/*  CSV parsing with merge-by-handle                                   */
/* ------------------------------------------------------------------ */

function parseCsvFile(filename: string): Product[] {
    const csvPath = path.join(process.cwd(), "data", filename);
    const csvContent = fs.readFileSync(csvPath, "utf-8");

    const rows: CsvRow[] = parse(csvContent, {
        columns: true,
        skip_empty_lines: true,
        relax_column_count: true,
        relax_quotes: true,
    });

    // Group rows by handle, merging fields
    const productMap = new Map<
        string,
        { title: string; description: string; type: string; tags: string; images: ProductImage[] }
    >();

    for (const row of rows) {
        const handle = (row["URL handle"] || "").trim();
        if (!handle) continue;

        let product = productMap.get(handle);
        if (!product) {
            product = { title: "", description: "", type: "", tags: "", images: [] };
            productMap.set(handle, product);
        }

        // Carry forward non-empty fields
        if (row.Title && row.Title.trim()) product.title = row.Title.trim();
        if (row.Description && row.Description.trim()) product.description = row.Description.trim();
        if (row.Type && row.Type.trim()) product.type = row.Type.trim();
        if (row.Tags && row.Tags.trim()) product.tags = row.Tags.trim();

        // Collect images
        const imgUrl = (row["Product image URL"] || "").trim();
        if (imgUrl) {
            product.images.push({
                url: imgUrl,
                position: parseInt(row["Image position"] || "0", 10),
                alt: (row["Image alt text"] || "").trim(),
            });
        }
    }

    // Convert to Product[]
    const products: Product[] = [];
    for (const [handle, data] of productMap) {
        const tags = parseTags(data.tags);
        products.push({
            handle,
            title: data.title,
            descriptionHtml: data.description,
            tags,
            type: data.type,
            images: orderImages(data.images),
            artist: extractArtist(tags),
            makeModel: extractMakeModel(tags),
        });
    }

    return products;
}

/* ------------------------------------------------------------------ */
/*  Cached product lists                                               */
/* ------------------------------------------------------------------ */

let _allProducts: Product[] | null = null;

function loadAllProducts(): Product[] {
    if (_allProducts) return _allProducts;

    const guitars = parseCsvFile("shopify_guitars_with_pics_ENHANCED.csv");
    const drumheads = parseCsvFile("shopify_drumheads.csv");

    _allProducts = [...guitars, ...drumheads];
    return _allProducts;
}

/* ------------------------------------------------------------------ */
/*  Public API                                                         */
/* ------------------------------------------------------------------ */

export function getAllProducts(): Product[] {
    return loadAllProducts();
}

export function getProductsByType(type: string): Product[] {
    const all = loadAllProducts();
    return all.filter(
        (p) => p.type.toLowerCase().includes(type.toLowerCase())
    );
}

export function getProductByHandle(handle: string): Product | undefined {
    const all = loadAllProducts();
    return all.find((p) => p.handle === handle);
}

/**
 * Returns a deterministic selection of featured products for a given type.
 * Picks evenly spaced items to show variety across the collection.
 */
export function getFeaturedProducts(type: string, n: number): Product[] {
    const products = getProductsByType(type);
    if (products.length <= n) return products;

    const step = Math.floor(products.length / n);
    const featured: Product[] = [];
    for (let i = 0; i < n; i++) {
        featured.push(products[i * step]);
    }
    return featured;
}
