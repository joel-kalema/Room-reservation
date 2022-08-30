const requestLogin = async (body) => {
    const res = await fetch(
        'http://127.0.0.1:3000/login',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body,
        },
    );

    const data = await res.json();

    console.log('login request login action', data);

    if (data.error) {
        return { user: undefined, jwt: undefined };
    }

    return data;
};

export default requestLogin;