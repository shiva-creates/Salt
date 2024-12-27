import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { RootState, store } from "../../store";

const userIdSlice = createSlice({
    name : 'userIdSlice',
    initialState : {
        userId : '0'
    },
    reducers: {
        generateSessionUUID : (state) => {
            state.userId = uuidv4();
            console.log('state.userId', state.userId);
        },
        currentUserId : (state, action: PayloadAction<any>) => {
            if(action.payload){
                state.userId = action.payload
            console.log('state.userId', state.userId);
            }else{
                state.userId = state.userId;
            console.log('state.userId', state.userId);
            }
        }
    }
})

export const {generateSessionUUID, currentUserId} = userIdSlice.actions
export default userIdSlice.reducer