import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { startLoading, stopLoading } from "../loadingSlice/loadingSlice";


interface menuState {
    isLoading: boolean;
    data: menuData;
  }

  interface menuData {
    id?: string,
    name?: string,
    description?: string,
    discountprice?: string,
    originalprice?: string,
    category?: string,
    imageurl?: string,
    quantity?: number,
    mealtime?: string,
  }

  const initialState : menuState = {
    isLoading: false,
    data: {},
}

export const getMenu = createAsyncThunk('get/menu', async (_, {dispatch}) => {
    dispatch(startLoading());
    const response = await fetch('https://us-central1-plenty-api.cloudfunctions.net/app/items');
    const data = await response.json();
    dispatch(stopLoading());
    return data;
}
)

const menuSlice = createSlice({
    name : 'menuSlice',
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(getMenu.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(getMenu.pending, (state, action)=>{
            state.isLoading = true;
        });
        builder.addCase(getMenu.rejected, (state, action)=>{
            state.isLoading = true;
            console.log('Error');
        });
    }
})

export default menuSlice.reducer