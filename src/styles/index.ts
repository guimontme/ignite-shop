import { createStitches } from "@stitches/react";

export const {
    config,
    css,
    styled,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme
 } = createStitches({
    theme: {
        colors: {
            white: '#FFF',
            green500: '#008757',
            green300: '#00b37e',

            gray900: '#121214',
            gray800: '#202024',
            gray300: '#c4c4cc',
            gray100: '#e1e1e6',

            gradient: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
        },

        fontSizes: {
            md: '1.125rem',
            lg: '1.25rem',
            xl: '1.5rem',
            '2xl': '2rem',
        }
    }
}) 