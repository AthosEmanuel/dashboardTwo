// Importar o módulo `next-svgr`
const withSvgr = require('next-svgr');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// Usar `withSvgr` para criar uma configuração que inclua SVGs
module.exports = withSvgr(nextConfig);
