/** @type {import('next').NextConfig} */
const nextMDX = require('@next/mdx');

// Configure MDX
const withMDX = nextMDX({
  // Support both .mdx and .md files
  extension: /\.mdx?$/,
  options: {
    // Optional: Configure remark/rehype plugins for MDX processing
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/**
 * @type {import('next').NextConfig}
 */
// Next.js configuration
const nextConfig = {
  // Allow MDX, JavaScript, and TypeScript files as pages
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  // Enable static export if needed
  output: 'export',

  // Optional: Optimize images (useful even for static exports)
  images: {
    unoptimized: true, // Required for static exports (disables Next.js image optimization)
  },

  // Optional: Add other Next.js configurations
  reactStrictMode: true, // Enables React Strict Mode for better error reporting

};

// Export the configuration with both MDX and Bundle Analyzer
module.exports = (withMDX(nextConfig));