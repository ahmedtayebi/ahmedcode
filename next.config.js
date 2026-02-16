/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'export',

    images: {
        unoptimized: true, // أضف هذا السطر لحل المشكلة
    }

};
module.exports = nextConfig;
