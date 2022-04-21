const plugins = {
    'postcss-import': {},
    'tailwindcss': {},
    'postcss-preset-env': { stage: 0 },
}

// This branch definitly runs...
if (process.env.NODE_ENV === 'production') {
    // This doesn't seem to work. None of the css is purged...
    plugins['@fullhuman/postcss-purgecss'] = {
        content: [
            'pages/**/*.js',
            'containers/**/*.js',
            'components/**/*.js',
            'views/**/*.js',
        ],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    }

    // Doubt I need this but leaving it here just in case...
    plugins['cssnano'] = {
        preset: ['default', {
            discardComments: {
                removeAll: true,
            },
        }],
    }
}

module.exports = {
    plugins,
}