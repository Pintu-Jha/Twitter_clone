import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'userCredential',
    initialState: {
      userCredential: {},
      isLogging :false
    },
    reducers: {
      saveUserCredential: (state, action) => {
       state.userCredential = action.payload;
       state.isLogging = true
      },
    },
    
  })
  
  export const { saveUserCredential } = authSlice.actions
  
  export default authSlice.reducer