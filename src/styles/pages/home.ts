import { styled } from "..";

export const HomeContainer = styled('main', {
    display: 'flex',
    width: '100%',
    maxWidth: 'calc(1180px + ((100vw - 1180px) / 2))',
    marginLeft: 'auto',
    minHeight: 565,
});

export const Product = styled('a', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    minWidth: '37vw',

    img: {
        objectFit: 'cover',
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 8,
        padding: '2rem',
        opacity: 0,
        fontWeight: 600,
        fontSize: '$lg',
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',

        transform: 'translateY(100%)',
        transition: 'all .3s ease-in-out',
         
        span: {
            fontSize: '$xl',
            fontWeight: 'bold',
            color: '$green300'
        },
    },

    '&:hover footer': {
        opacity: 1,
        transform: 'translateY(0%)',
    }
})