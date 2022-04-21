// /**
//  * @type {import('next').NextConfig}
//  */

// const nextConfig = {
//     reactStrictMode: true,
//     async redirects() {
//         return [{
//             source: '/',
//             destination: '/dashboard',
//             permanent: true,
//         }, ]
//     },
// }

// module.exports = nextConfig

// next.config.js
/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
    reactStrictMode: true,
    experimental: {
        // Enables the styled-components SWC transform
        styledComponents: true
    },
    // compiler: {
    //     // Enables the styled-components SWC transform
    //     styledComponents: true
    // },
    images: {
        domains: ['images.unsplash.com'],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    //     // Filter out default Next.js CSS rules:
    //     config.module.rules = config.module.rules.filter(r => !r.oneOf);

    //     // Add your own rules

    //     config.module.rules.push({
    //         test: /\.scss$/i,
    //         use: ['style-loader', 'css-loader'],
    //     })
    //     return config
    // },
}