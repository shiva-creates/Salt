import { configureStore } from '@reduxjs/toolkit'
import logInSlice from './slices/logInSlice/logInSlice'
import menuSlice from './slices/menuSlice/menuSlice'
import loadingSlice from './slices/loadingSlice/loadingSlice'
import cartSlice from './slices/cartSlice/cartSlice'
import signUpSlice from './slices/signUpSlice/signUpSlice'
import profileSlice from './slices/profileSlice/profileSlice'
import userIdSlice from './slices/userIdSlice/userIdSlice'
import addressSlice from './slices/addressSlice/addressSlice'
import errorMessageSlice from './slices/errorMessageSlice/errorMessageSlice'

import { v4 as uuidv4 } from 'uuid';

const reHydrateAuth = () => {
  const auth = localStorage.getItem('auth');
  if (auth !== null) {
    return JSON.parse(auth); // re-hydrate the store
  }
  return {
    isLoggedIn : false,
    data : {}
  };
};

const reHydrateUserId = () => {
  const userId = localStorage.getItem('userId');
  if (userId !== null) {
    return JSON.parse(userId); // re-hydrate the store
  } else{
    let tempUserId = {
      userId : uuidv4()
  };
    localStorage.setItem('userId', JSON.stringify(tempUserId))
    return {
      userId : tempUserId,
  };
  }

};

const authMiddleware = (store : any) => (next : any) => (action : any) => {
  const result = next(action);
  if ( action.type?.startsWith('post/logIn') ) {
    const authState = store.getState().logInSlice;
    localStorage.setItem('auth', JSON.stringify(authState))
  }
  if(action.type === 'logInSlice/logOut'){
    const authState = {
      isLoggedIn : false,
      data : {}
    };
    localStorage.setItem('auth', JSON.stringify(authState))
    const tempUserId = store.getState().userIdSlice;
    localStorage.setItem('userId', JSON.stringify(tempUserId));
  }

  if(action.type === 'userIdSlice/generateSessionUUID' || action.type === 'userIdSlice/currentUserId'){
    const userId = store.getState().userIdSlice;
    localStorage.setItem('userId', JSON.stringify(userId))
  }
  return result;
};

export const store = configureStore({
  reducer: {
    loadingSlice : loadingSlice,
    logInSlice : logInSlice,
    signUpSlice : signUpSlice,
    menuSlice : menuSlice,
    cartSlice : cartSlice,
    profileSlice : profileSlice,
    userIdSlice : userIdSlice,
    addressSlice : addressSlice,
    errorMessageSlice : errorMessageSlice
  },
  preloadedState : {
    logInSlice : reHydrateAuth(),
    userIdSlice : reHydrateUserId(),
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
})





// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch