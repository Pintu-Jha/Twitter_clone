import { createSlice } from '@reduxjs/toolkit'

const mainSlice = createSlice({
    name: 'userData',
    initialState: {
      userData: {},
    },
    reducers: {
      saveUserData: (state, action) => {
       state.userData = action.payload;
      },
    },
    
  })
  
  export const { saveUserData } = mainSlice.actions
  
  export default mainSlice.reducer