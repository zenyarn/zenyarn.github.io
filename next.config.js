const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 确保静态导出已启用
  images: {
    unoptimized: true // 禁用图片优化以兼容静态导出
  }
}

module.exports = withNextra(nextConfig)
