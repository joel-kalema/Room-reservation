const authenticateUser = async (jti) => {
    const res = await fetch('http://127.0.0.1:3000/users/login', {
        headers: {
            'Content-Type': 'application/json',
            Authenticate: jti,
        },
    });
    const data = await res.json();

    return data;
};

export default authenticateUser;