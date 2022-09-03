import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  reservations: [],
  loading: false,
};

export const postReservations = createAsyncThunk(
  'reservations/postReservations',
  async (reservation) => {
    const response = await fetch('http://[::1]:3000/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        reservation: reservation,
      }),
    });
    return response.json();
  });