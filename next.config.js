/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      "avatars.githubusercontent.com",
      "i.ytimg.com",
      "api.metaimg.net",
    ],
  },
};

module.exports = nextConfig;
