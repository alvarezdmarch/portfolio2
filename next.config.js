/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // only include these keys in prod
  ...(isProd && {
    basePath: '/portfolio2',
    assetPrefix: '/portfolio2/',
  }),
};

module.exports = nextConfig;
