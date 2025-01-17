/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only include basePath if you're deploying to GitHub Pages
  // basePath: '/your-repo-name',
}

module.exports = nextConfig 