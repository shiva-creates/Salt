import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { startLoading, stopLoading } from "../loadingSlice/loadingSlice";
import { showError } from "../errorMessageSlice/errorMessageSlice";


interface AddresssData {
    id?: string;
    address?: string;
    state?: string;
    city?: string;
    postalcode?: string;
    locality?: string;
    landmark?: string;
  }

  interface AddressState {
    data: AddresssData[];
  }



const initialState : AddressState = {
    data: [],
}

export const getUserAddress = createAsyncThunk('get/Address', async (userData: any, { dispatch }) => {
    const {userId, token} = userData;
    dispatch(startLoading());
    const response = await fetch(`https://us-central1-plenty-api.cloudfunctions.net/app/address?` + new URLSearchParams({
        userId: userId,
    }).toString(), {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
});
    const data = await response.json();
    dispatch(stopLoading());
    return data;
})

export const postAddress = createAsyncThunk('post/address', async (addressData : any, {dispatch}) => {
    const {token, submitData} = addressData;

    dispatch(startLoading());
         const response = await fetch('https://us-central1-plenty-api.cloudfunctions.net/app/address', {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body : JSON.stringify(submitData),
         });
         if (!response.ok) {
            dispatch(stopLoading());
            const errorData = await response.json();
            console.log('errorData', errorData);
            dispatch(showError(errorData))
            throw new Error(errorData.message || 'Something went wrong');
        }
         const data = await response.json();
         dispatch(stopLoading());
         return data;
    }
)

export const deleteAddress = createAsyncThunk('delete/address', async (addressData: any, { dispatch }) => {
    const {addressId , authToken} = addressData;
    dispatch(startLoading());
    const response = await fetch(`https://us-central1-plenty-api.cloudfunctions.net/app/address/${addressId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
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

const AddressSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserAddress.fulfilled, (state, action) => {
            state.data = action.payload;
        });
        builder.addCase(getUserAddress.pending, (state, action) => {
        });
        builder.addCase(getUserAddress.rejected, (state, action) => {
            console.log('Error');
        });
        builder.addCase(postAddress.fulfilled, (state, action) => {
            state.data = action.payload;
        });
        builder.addCase(postAddress.pending, (state, action) => {
        });
        builder.addCase(postAddress.rejected, (state, action) => {
            console.log('Error');
        });

        builder.addCase(deleteAddress.fulfilled, (state, action) => {
            console.log('deleted', action);
            state.data = state.data.filter((data)=> data.id !== action.meta.arg.addressId);
        });
        builder.addCase(deleteAddress.pending, (state, action) => {
        });
        builder.addCase(deleteAddress.rejected, (state, action) => {
            console.log('Error');
        });
    }
})

export default AddressSlice.reducer