/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out',
    images: {
        unoptimized: true,
    },
    basePath: process.env.NODE_ENV === 'production' ? '/alexcho_portfolio_2025' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/alexcho_portfolio_2025' : '',
}

module.exports = nextConfig