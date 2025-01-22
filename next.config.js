/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/alexcho_portfolio_2025/',  // Add this - should match your repository name
}

module.exports = nextConfig