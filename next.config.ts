import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './my/imageLoader/index.js',
  },
  /* config options here */
  // rewrites: async () => {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/home', // 将 '/' 重写为 '/home'
  //     },
  //   ];
  // },
};

export default nextConfig;
