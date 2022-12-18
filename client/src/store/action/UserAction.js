import { registration, login, check } from '../../api/userApi'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const signUp = createAsyncThunk(
  'user/signUp',
  async ({ email, password }, thunkApi) => {
    try {
      const response = await registration(email, password)
      return response
    } catch (error) {
      console.log('>>>>error register:', error)
      return thunkApi.rejectWithValue('Failed to register users')
    }
  }
)

export const signIn = createAsyncThunk(
  'user/signIn',
  async ({ email, password }, thunkApi) => {
    try {
      const response = await login(email, password)
      return response
    } catch (error) {
      console.log('>>>>error login:', error)
      return thunkApi.rejectWithValue('Failed to login users')
    }
  }
)

export const checkToken = createAsyncThunk(
  'user/checkToken',
  async (thunkApi) => {
    try {
      const response = await check()
      return response
    } catch (error) {
      console.log('>>>>error check:', error)
      return thunkApi.rejectWithValue('Failed to check users')
    }
  }
)