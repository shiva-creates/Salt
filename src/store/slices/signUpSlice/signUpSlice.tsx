import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { startLoading, stopLoading } from "../loadingSlice/loadingSlice";


export const postSignUp = createAsyncThunk('post/signUp', 
    async (submitData : any, {dispatch}) => {
    dispatch(startLoading());
         const response = await fetch('https://us-central1-plenty-api.cloudfunctions.net/app/users', {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(submitData),
         });
         const data = await response.json();
         dispatch(stopLoading());
         return data;
    }
)

const signUpSlice = createSlice({
    name : 'logInSlice',
    initialState : {
        data : {}
    },
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(postSignUp.fulfilled, (state, action) => {

            state.data = action.payload;
        });
        builder.addCase(postSignUp.pending, (state, action)=>{

        });
        builder.addCase(postSignUp.rejected, (state, action)=>{
            console.log('Error');
        });
    }
})

export default signUpSlice.reducer
