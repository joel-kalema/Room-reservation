import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/users/userSlice';
import roomReducer from './reducers/rooms/roomSlice';


export const store = configureStore({
  reducer: {
    user: userReducer,
    rooms: roomReducer,
  },  
});