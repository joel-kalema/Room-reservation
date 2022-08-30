const authenticateUser = async (jwt) => {
    const res = await fetch('http://127.0.0.1:3000/login', {
        headers: {
            'Content-Type': 'application/json',
            Authenticate: jwt,
        },
    });
    const data = await res.json();

    return data;
};

export default authenticateUser;