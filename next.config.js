/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },    
    env: {
        NEXT_PUBLIC_API_BASE_URL: 'https://dummyjson.com',
        NEXT_PUBLIC_API_TIMEOUT: 10000,
    }
}

module.exports = nextConfig
