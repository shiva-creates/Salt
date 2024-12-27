import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { startLoading, stopLoading } from "../loadingSlice/loadingSlice";

export const getRewardPoints = createAsyncThunk('get/reward', async (userId: any, { dispatch }) => {
    dispatch(startLoading());
    const response = await fetch('https://us-central1-plenty-api.cloudfunctions.net/app/reward?' + new URLSearchParams({
        userId: userId,
    }).toString())
    const data = await response.json();
    dispatch(stopLoading());
    return data;
})

const rewardSlice = createSlice({
    name: 'cartSlice',
    initialState : {
        data : [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getRewardPoints.fulfilled, (state, action) => {
            state.data = action.payload;
        });
        builder.addCase(getRewardPoints.pending, (state, action) => {
        });
        builder.addCase(getRewardPoints.rejected, (state, action) => {
            console.log('Error');
        });
    }
})

export default rewardSlice.reducer
