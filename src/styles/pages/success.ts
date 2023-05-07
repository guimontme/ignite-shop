import { styled } from "..";

export const SuccessContainer = styled('main', {
    maxWidth: 1180,
    paddingInline: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginInline: 'auto',
    textAlign: 'center',
    // height: 600,
    h1: {
        fontSize: '$2xl',
        color: '$gray100',
        fontWeight: 'bold',
        marginBottom: '4rem',
    },
    p: {
        marginInline: 'auto',
        maxWidth: 590,
        marginBottom: 100,
        fontSize: '$xl',
        color: '$gray300',
    },
    a: {
        color: '$green500',
        fontWeight: 'bold',
        display: 'block',
        textDecoration: 'none',
        fontSize: '$lg'
    },
});

export const SuccessImageContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 127,
    height: 145,
    background: '$gradient',
    borderRadius: 8,
    marginBottom: '2rem',

    img: {
        objectFit: 'cover',
    }

});