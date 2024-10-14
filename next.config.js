/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/launcher.sh',
        destination: 'https://raw.githubusercontent.com/madara-alliance/madara/refs/heads/main/scripts/launcher',
        permanent: false,
      },
    ]
  },
};

module.exports = nextConfig;
