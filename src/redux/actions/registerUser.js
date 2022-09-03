const requestRegisterUser = async (body) => {
    const parsedBody = JSON.parse(body);
    const newBody = {
        user: {
            name: parsedBody.name,
            email: parsedBody.email,
            password: parsedBody.password,
        },
    };
    const res = await fetch(
        'http://localhost:3000/users/signup',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBody),
        },
    );

    const data = await res.json();
    if (!data.id) {
        return (
            <>
                <p>Hello, no user found</p>
            </>
        );
    }

    return data;
};

export default requestRegisterUser;