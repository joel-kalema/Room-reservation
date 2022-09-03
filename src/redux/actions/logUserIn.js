const requestLogin = async (body) => {
    const res = await fetch(
        'http://localhost:3000/users/login',
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