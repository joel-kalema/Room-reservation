import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  reservations: [],
  loading: false,
};

export const postReservations = createAsyncThunk(
  'reservations/postReservations',
  async (reserve) => {
    const response = await axios.post('http://[::1]:3000/api/v1/reservations', {
      headers: {
        Authorization: localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reservation: {
          reserve
        }
      }),
    });
    return response;
  });