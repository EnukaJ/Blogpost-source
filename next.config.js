const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/EnukaJ/BlogPosts/main/images/**'
      }
    ]
  }
}

module.exports = nextConfig
