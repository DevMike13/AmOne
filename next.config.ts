import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
