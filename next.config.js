module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/id/covid19/:path*',
        destination: 'https://dekontaminasi.com/api/id/covid19/:path*' // Proxy to Backend
      }
    ]
  }
}
