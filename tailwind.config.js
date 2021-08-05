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
                    // Replaced according to the container with in the design
                    lg: "73.125rem",
                    xl: "73.125rem"
                }
            },
            fontFamily: {
                'circular': ['Circular Std Book', 'sans-serif'],
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
                    '500': '#F65B02',
                },
            },
            boxShadow: {
                '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
