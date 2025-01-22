/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: process.env.NODE_ENV === 'production' ? '/alexcho_portfolio_2025' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/alexcho_portfolio_2025' : '',
    webpack: (config, { dev, isServer }) => {
        if (dev && !isServer) {
            config.watchOptions = {
                ignored: ['**/node_modules', '**/.next', '**/out'],
                aggregateTimeout: 300,
                poll: 1000,
            }
        }
        return config
    },
}

module.exports = nextConfig