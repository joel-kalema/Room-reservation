import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rooms: [],
  loading: false,
};

export const fetchRooms = createAsyncThunk(
  'rooms/fetchRooms',
  async () => {
    const response = await axios.get('http://[::1]:3000/api/v1/rooms');
    return response.data;
  },
);

const roomSlice = createSlice({
  name: 'rooms',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.pending, (state) => {
        state.loading = true
  })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.loading = false,
        state.rooms = action.payload
        state.error = ''
        console.log(action.payload)
  });
  },
});

export default roomSlice.reducer;
export const { } = roomSlice.actions;