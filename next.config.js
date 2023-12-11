/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagehandler.autoonline.com',
        port: '',
        pathname: '/ImageHttpHandler.ashx/**',
      },
    ],
  },
}


