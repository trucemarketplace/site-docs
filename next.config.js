/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/terms",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
