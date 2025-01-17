const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['lib', 'messages', 'src'],
  },
};

module.exports = withNextIntl(nextConfig);
