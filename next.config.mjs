/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  basePath: "/tool-hub",
  images: {
    unoptimized: true,
  },
  redirects() {
    return [
      {
        source: "/",
        destination: "/illustrations",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
