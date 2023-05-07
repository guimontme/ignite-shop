import { styled } from "..";

export const HomeContainer = styled('main', {
    display: 'flex',
    width: '100%',
    maxWidth: 'calc(1180px + ((100vw - 1180px) / 2))',
    marginLeft: 'auto',
    minHeight: 565,
});

export const Product = styled('div', {
    background: '$gradient',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    cursor: 'grab',
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    maxWidth: 950,
    minWidth: 665,

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
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        cursor: 'pointer',

        transform: 'translateY(100%)',
        transition: 'all .3s ease-in-out',
        
        strong: {
            color: '$gray100',
            fontSize: '$lg',
            fontWeight: 600,
        },
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