import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                '13': 'repeat(13, minmax(0, 1fr))',
            },
            colors: {
                blue: {
                    400: '#2589FE',
                    500: '#0070F3',
                    600: '#2F6FEB',
                    darkLink: 'rgb(0, 114, 245)',
                },
                black: {
                    DEFAULT: '#000',
                    10: 'rgba(0, 0, 0, 0.1)',
                    80: 'rgba(0, 0, 0, 0.8)',
                    metro: '#080202',
                    lightText: 'rgb(10, 10, 10)',
                },
                grey: {
                    metro: 'rgb(237, 237, 237)',
                    10: 'rgba(128, 128, 128, 0.1)'
                }
            },
        },
        keyframes: {
            shimmer: {
                '100%': {
                    transform: 'translateX(100%)',
                },
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
export default config;
