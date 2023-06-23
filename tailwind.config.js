module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                morebi: 'Morebi Rounded Regular',
                argentum: 'Argentum Sans Medium',
            },
            colors: {
                primary: '#0C0C30',
                secondary: '#5bd3c7',
                tertiary: '#24495F',
            },
            maxWidth: {
                default: '1366px',
            },
            backgroundImage: {
                lid: 'url(/images/Lid.png)',
            },
        },
    },
    plugins: [],
};
