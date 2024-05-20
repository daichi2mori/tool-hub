/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV == "production";

const nextConfig = {
  publicRuntimeConfig: {
    basePath: isProd ? "/tool-hub" : "",
  },
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
