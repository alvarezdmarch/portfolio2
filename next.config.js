/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: "/portfolio2",
    assetPrefix: process.env.NODE_ENV === "production" ? "https://www.alvarezdm.me" : "",
  };
  
  module.exports = nextConfig;
  
