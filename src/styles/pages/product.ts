import { styled } from "..";

export const ProductContainer = styled('main', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    gap: '4rem',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',
})
export const ImageContainer = styled('div', {
    background: '$gradient',
    maxWidth: 576,
    minHeight: 576,
    maxHeight: 656,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,

    img: {
        maxWidth: '100%',
        objectFit: 'cover',
    },
})
export const ProductDetails = styled('div', {
    paddingTop: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    h1: {
        fontSize: '$2xl',
        linkHeight: 1.4,
    },
    '.price': {
        color: '$green300',
        fontSize: '$2xl',
        fontWeight: 300,
        marginBlock: '1rem',
    },
    p: {
        marginBlock: '2rem',
        fontWeight: 300,
        fontSize: '$md',
        lineHeight: 1.6,
        color: '$gray300',
    },
    button: {
        backgroundColor: '$green500',
        padding: '1.5rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '100%',
        borderRadius: 8,
        marginTop: 'auto',
        cursor: 'pointer',
        fontSize: '$md',

        '&:disabled': {
            opacity: 0.6,
            cursor: 'not-allowed',
        },

        '&:not(:disabled):hover': {
            backgroundColor: '$green300',
            color: '$white',
        }
    }
})