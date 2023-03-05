// @ts-ignore
import { createSlice } from  '@reduxjs/toolkit'

export const loggedUserSlice = createSlice({
  name: 'loggedUser',
  
  initialState: {
    data: {},
    logged: false,
    loading: false,
    retrievered: false
  },
  
  reducers: {
    setLoggedUser: (state: any, action: any) => {
      return { ...state, ...action.payload };
    }
  }
});

export default loggedUserSlice