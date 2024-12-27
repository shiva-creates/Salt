import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ErrorMessageState {
  isShowing: boolean;
  errorMessage: any;
};

const initialState: ErrorMessageState = {
  isShowing: false,
  errorMessage : null
};

const ErrorMessageSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    showError: (state, action: PayloadAction<string>) => {
      state.isShowing = true;
      state.errorMessage = action.payload;
    },
    hideError: (state) => {
      state.isShowing = false;
    }
  },
});

export const { showError, hideError } = ErrorMessageSlice.actions;
export default ErrorMessageSlice.reducer;