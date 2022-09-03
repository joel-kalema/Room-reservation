import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/users/userSlice';


export const store = configureStore({
  reducer: {
    user: userReducer,
  },  
});