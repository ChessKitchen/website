/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/website',
    assetPrefix: '/website/',
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
}

module.exports = nextConfig
