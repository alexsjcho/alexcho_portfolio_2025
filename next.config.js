/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: isProduction ? '/alexcho_portfolio_2025' : '',
    assetPrefix: isProduction ? '/alexcho_portfolio_2025/' : '',
}

module.exports = nextConfig