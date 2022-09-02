const requestLogin = async (body) => {
    const res = await fetch(
        'http://127.0.0.1:3000/users/login',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body,
        },
    );

    const data = await res.json();


    if (data.error) {
        return { user: undefined, jti: undefined };
    }

    return data;
};

export default requestLogin;