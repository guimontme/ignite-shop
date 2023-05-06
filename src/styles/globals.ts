import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
    },

    body: {
        backgroundColor: '$gray900',
        '-webkit-font-smoothing': 'antialiased',
        overflowX: 'hidden',
    },

    'body, input, textarea, button': {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 400,
        color: '$gray100',
    },
})