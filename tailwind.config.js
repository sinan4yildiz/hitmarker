module.exports = {
    purge: {
        mode: 'layers',
        content: ['./public/**/*.html', './src/**/*.vue'],
    },
    darkMode: false,
    theme: {
        extend: {
            container: {
                center: true,
                screens: {
                    // Replaced according to the container width in the design
                    lg: "73.125rem",
                    xl: "73.125rem"
                }
            },
            spacing: {
                '13': '3.25rem',
            },
            fontFamily: {
                'circular': ['Circular Std Book', 'sans-serif'],
            },
            fontSize: {
                '5xl': '2.625rem',
            },
            colors: {
                gray: {
                    '350': '#AAB8C2',
                    '450': '#888E97',
                    '950': '#19191B',
                },
                yellow: {
                    '25': 'rgba(255, 238, 217, 0.3)',
                },
                orange: {
                    '50': '#FFEDED',
                    '400': '#FF6E1E',
                    '500': '#FF5E00',
                },
            },
            boxShadow: {
                '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.075)',
                inner: 'inset 0 0 8px 0 rgba(0, 0, 0, 0.2)',
            },
            borderRadius: {
                'xl': '0.625rem',
            },
            borderWidth: {
                '10': '10px',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
