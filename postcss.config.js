// module.exports = {
//     plugins: {
//         // Illustrational
//         'postcss-css-variables': {},
//     },
// };

// module.exports = {
//     plugins: {
//         tailwindcss: {},
//         autoprefixer: {},
//     },
// }

module.exports = {
    plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': {},
        autoprefixer: {},
        tailwindcss: {},
        // 'postcss-flexbugs-fixes': {},
        'postcss-preset-env': {
            autoprefixer: {
                flexbox: 'no-2009'
            },
            stage: 3,
            features: {
                'custom-properties': false
            }
        }
    }
}