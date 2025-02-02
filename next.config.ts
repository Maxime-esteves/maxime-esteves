/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Permet d'exporter les images sans optimisation (obligatoire pour Next.js export)
  },
};

module.exports = nextConfig;
