/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name', // Replace with your actual repo name
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 