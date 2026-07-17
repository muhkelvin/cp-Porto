import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
    './src/i18n/request.js'
);

const nextConfig = {
    images: {
        domains: ['picsum.photos', 'i.pravatar.cc'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com',
            },
        ],
    },
};

export default withNextIntl(nextConfig);
