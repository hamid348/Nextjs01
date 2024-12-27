import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com"],

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'access.exmaple.com',
        port: '',
        pathname: '/account123/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;


