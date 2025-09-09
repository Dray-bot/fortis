/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "thumbs.dreamstime.com",
      "images.stockcake.com",
      "media.istockphoto.com", // add this new host
      "nkd.co.uk",
      "images.squarespace-cdn.com",
      "macmillan.yale.edu",
      "media.licdn.com",
      "modernsteeldoors.com",
      "media.istockphoto.com",
      "cdn.home-designing.com",
      "images.adsttc.com",
    ],
  },
}

export default nextConfig
