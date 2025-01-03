import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com", "source.unsplash.com"],

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/account123/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;


