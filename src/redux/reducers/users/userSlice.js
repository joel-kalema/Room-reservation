import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    user: null,
};


// export const fetchRooms = createAsyncThunk(
//     'rooms/fetchRooms',
//     async () => {
//       const response = await axios.get('http://[::1]:3000/api/v1/rooms', {
//         headers: {
//           Authorization: localStorage.getItem('token'),
//         },
//       });
//       console.log
//       return response.data;
//     },
//   );


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
    localStorage.setItem('user', data.id);
    console.log('ads:', data.id);
    return data;
    });
            

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logUserIn: (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.isLoggedIn = true;
            // eslint-disable-next-line no-param-reassign
            state.user = action.payload;
        },
        logUserOut: (state) => {
            // eslint-disable-next-line no-param-reassign
            state.isLoggedIn = false;
            // eslint-disable-next-line no-param-reassign
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(requestLogin.pending, (state) => {
            state.loading = true
      })
          .addCase(requestLogin.fulfilled, (state, action) => {
            state.loading = false,
            state.user = action.payload
            state.error = ''
      });
      }
});

export const { logUserIn, logUserOut } = userSlice.actions;

export default userSlice.reducer;