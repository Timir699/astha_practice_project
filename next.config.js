module.exports = {
  images: {
    domains: ["upload.wikimedia.org","cdn.shopify.com","images.othoba.com","5.imimg.com","encrypted-tbn0.gstatic.com",]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/products',
        permanent: true,
      },
    ]
  },
}