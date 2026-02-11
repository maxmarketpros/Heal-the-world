import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-5246de9bd3954290a2919f782898af78.r2.dev",
      },
    ],
  },
};

export default nextConfig;
