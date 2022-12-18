import { createSlice } from '@reduxjs/toolkit'
import { signUp, signIn, checkToken } from '../action/UserAction'

const initialState = {
  isAuth: false,
  user: {},
  isLoading: false,
  error: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = false
      state.user = {}
    }
  },
  extraReducers: {
    [signUp.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = null
      state.user = action.payload
      state.isAuth = true
    },
    [signUp.pending]: (state) => {
      state.isLoading = true
    },
    [signUp.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    [signIn.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = null
      state.user = action.payload
      state.isAuth = true
    },
    [signIn.pending]: (state) => {
      state.isLoading = true
    },
    [signIn.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    }, 

    [checkToken.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = null
      state.user = action.payload
      state.isAuth = true
    },
    [checkToken.pending]: (state) => {
      state.isLoading = true
    },
    [checkToken.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

const { actions, reducer } = userSlice

export const { setAuth } = actions

export default reducer
