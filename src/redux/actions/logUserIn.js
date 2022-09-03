import { createAsyncThunk } from "@reduxjs/toolkit";

// const requestLogin = async (log) => {
//     const res = await fetch(
//         'http://127.0.0.1:3000/users/login',
//         {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 user: log,
//             }),
//         }
//     );
//     localStorage.setItem('token', res.headers.get('Authorization'));
//     const data = await res.json();
//     console.log(data.id);
//     return data;

// };

export const requestLogin = createAsyncThunk(
    'users/login',
    async (log) => {
        const res = await fetch( 
        'http://127.0.0.1:3000/users/login',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: log,
            }),

        }
    );
    localStorage.setItem('token', res.headers.get('Authorization'));
    const data = await res.json();
    console.log(data.id);
    return data;
    });

export default requestLogin;