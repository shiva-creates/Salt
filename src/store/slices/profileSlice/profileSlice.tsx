import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { startLoading, stopLoading } from "../loadingSlice/loadingSlice";
import { showError } from "../errorMessageSlice/errorMessageSlice";


interface ProfileData {
    id?: string;
    username?: string;
    email?: string;
    password?: string;
    phonenumber?: string;
  }

  interface ProfileState {
    data: ProfileData;
  }



const initialState : ProfileState = {
    data: {},
}

export const getUserById = createAsyncThunk('get/userDetails', async (userData: any, { dispatch }) => {
    const {userId, token} = userData
    dispatch(startLoading());
    const response = await fetch(`https://us-central1-plenty-api.cloudfunctions.net/app/users/${userId}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`, // notice the Bearer before your token
        },
});
if (!response.ok) {
    const errorData = await response.json();
    dispatch(stopLoading());
    console.log('errorData', errorData);
    dispatch(showError(errorData))
    throw new Error(errorData.message || 'Something went wrong');
}
    const data = await response.json();
    dispatch(stopLoading());
    return data;
})








const profileSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserById.fulfilled, (state, action) => {
            state.data = action.payload;
        });
        builder.addCase(getUserById.pending, (state, action) => {
        });
        builder.addCase(getUserById.rejected, (state, action) => {
            console.log('Error');
        });
    }
})

export default profileSlice.reducer