module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        container: {
            padding: '2rem'

        },
    },
    variants: {
        extend: {},
    },


    plugins: [
        require('@tailwindcss/forms'),
    ]

}
