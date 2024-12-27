import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { startLoading, stopLoading } from "../loadingSlice/loadingSlice";


interface Item {
    id : string,
    name : string,
    description : string,
    imageurl : string,
    originalprice : string,
    discountprice : string,
}
interface CartItem {
    id : string,
    itemid : string,
    userid : string,
    isanonymoususer : string,
    quantity : string,
    size : string,
    Item : Item;
}

interface CartState {
    data : CartItem[]
}

const initialState : CartState = {
    data: [],
}

export const getCartItems = createAsyncThunk('get/cart', async (userId: any, { dispatch }) => {
    dispatch(startLoading());
    const response = await fetch('https://us-central1-plenty-api.cloudfunctions.net/app/cart?' + new URLSearchParams({
        userId: userId,
    }).toString())
    const data = await response.json();
    dispatch(stopLoading());
    return data;
})


export const saveCartItem = createAsyncThunk('post/cart', async (cartData: any, { dispatch }) => {
    dispatch(startLoading());
    const response = await fetch('https://us-central1-plenty-api.cloudfunctions.net/app/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartData),
    });
    const data = await response.json();
    dispatch(stopLoading());
    return data;
})


export const updateCartItems = createAsyncThunk('update/cart', async (cartData: any, { dispatch }) => {
    const { cartUpdateData, cartItemId } = cartData;
    dispatch(startLoading());
    const response = await fetch(`https://us-central1-plenty-api.cloudfunctions.net/app/cart/${cartItemId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartUpdateData),
    });
    const data = await response.json();
    dispatch(stopLoading());
    return data;
})


export const deleteCartItems = createAsyncThunk('delete/cart', async (cartId: any, { dispatch }) => {
    dispatch(startLoading());
    const response = await fetch(`https://us-central1-plenty-api.cloudfunctions.net/app/cart/${cartId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    dispatch(stopLoading());
    return data;
})



const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCartItems.fulfilled, (state, action) => {
            state.data = action.payload;
        });
        builder.addCase(getCartItems.pending, (state, action) => {
        });
        builder.addCase(getCartItems.rejected, (state, action) => {
            console.log('Error');
        });

        builder.addCase(saveCartItem.fulfilled, (state, action) => {
            console.log('state.data', state.data);
            state.data.push(action.payload.cart);
        });
        builder.addCase(saveCartItem.pending, (state, action) => {
        });
        builder.addCase(saveCartItem.rejected, (state, action) => {
            console.log('Error');
        });

        builder.addCase(deleteCartItems.fulfilled, (state, action) => {
            console.log('deleted', action);
            state.data = state.data.filter((data)=> data.id !== action.meta.arg);
        });
        builder.addCase(deleteCartItems.pending, (state, action) => {
        });
        builder.addCase(deleteCartItems.rejected, (state, action) => {
            console.log('Error');
        });
    }
})

export default cartSlice.reducer