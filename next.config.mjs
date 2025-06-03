/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  webpack: (config) => {
    config.resolve.alias["@" ] = require("path").resolve(__dirname, "src");
    return config;
  },
};

export default nextConfig;
