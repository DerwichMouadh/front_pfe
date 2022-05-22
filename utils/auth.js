import nextCookie from 'next-cookies';

export const requirePageAuth = (ctx) => {
    const { token } = nextCookie(ctx);

    if (!token) {
        return {
            props: {},
            redirect: {
                destination: '/Dashboard',
                permanent: false
            }
        };
    }

    return { props: { token } };
};