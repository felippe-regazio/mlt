// @ts-ignore
import { configureStore } from '@reduxjs/toolkit'
import loggedUserSlice from './slices/loggedUserSlice'
import ProviderComponent from './ProviderComponent';

export default configureStore({
  reducer: {
    loggedUser: loggedUserSlice.reducer
  }
});

export const StoreProvider = ProviderComponent;
export const setLoggedUser = loggedUserSlice.actions.setLoggedUser;