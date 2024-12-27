import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { startLoading, stopLoading } from "../loadingSlice/loadingSlice";
import { showError } from "../errorMessageSlice/errorMessageSlice";

interface LogInData {
    userName?: string;
    userId? : any;
    token? : string;
  }


 interface LogInState {
    isLoggedIn: boolean;
    data: LogInData;
  }



const initialState : LogInState = {
    isLoggedIn: false,
    data: {},
}

export const postLogIn = createAsyncThunk('post/logIn', 
    async (submitData : any, {dispatch}, ) => {
    dispatch(startLoading());
         const response = await fetch('https://us-central1-plenty-api.cloudfunctions.net/app/login', {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(submitData),
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
    }
)

export const googleLogInValidate = createAsyncThunk('post/googleSignIn',
    async (apiResponse : any, {dispatch},) => {
        const user = apiResponse.user;
        dispatch(startLoading());
        const response = await fetch("https://us-central1-plenty-api.cloudfunctions.net/app/loginValidate", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: user.email, uid: user.uid, userName: user.displayName }),
          })
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
    }

)

const logInSlice = createSlice({
    name : 'logInSlice',
    initialState,
    reducers : {
        logOut: (state) => {
            state.isLoggedIn = false;
            state.data = {};
          },
    },
    extraReducers : (builder) => {
        builder.addCase(postLogIn.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.data = action.payload;
        });
        builder.addCase(postLogIn.pending, (state, action)=>{
            state.isLoggedIn = false;
        });
        builder.addCase(postLogIn.rejected, (state, action)=>{
            state.isLoggedIn = false;
            console.log('Error');
        });
    }
})

export const { logOut } = logInSlice.actions;
export default logInSlice.reducer