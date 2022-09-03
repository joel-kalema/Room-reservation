const authenticateUser = async (jwt) => {
    const res = await fetch('http://localhost:3000/users/login', {
        headers: {
            'Content-Type': 'application/json',
            Authenticate: jwt,
        },
    });
    const data = await res.json();

    return data;
};

export default authenticateUser;