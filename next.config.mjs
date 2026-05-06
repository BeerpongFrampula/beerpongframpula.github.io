/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tells Next.js to build a static HTML/CSS/JS site instead of a Node server
  output: 'export',

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
