import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import api from '../../api';

const SLICE_NAME = 'dogImage';

const initialState = {
  isFetching: false,
  dogImage: '',
  errorMessage: '',
  number: 0,
};

const getDogImageRequest = createAsyncThunk(
  `${SLICE_NAME}/fetchDogApi`,
  async (payload: any) => {
    console.log(payload);
    const response = await api.getDogImage();
    return response; // is payload
  },
);

const slide = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    increment: state => {
      state.number += 1;
    },
    decrement: state => {
      state.number -= 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getDogImageRequest.pending, state => {
        state.isFetching = true;
      })
      .addCase(getDogImageRequest.fulfilled, (state, action) => {
        state.isFetching = false;
        state.dogImage = action.payload.message;
      })
      .addCase(getDogImageRequest.rejected, (state, action) => {
        state.isFetching = false;
        state.errorMessage = action.error.message || '';
      });
  },
});

export default {
  name: SLICE_NAME,
  reducer: slide.reducer,
  actions: {...slide.actions, getDogImageRequest},
};
