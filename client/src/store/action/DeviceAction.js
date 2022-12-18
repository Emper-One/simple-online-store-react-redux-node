import { postType, getTypes, postBrand, getBrands, postDevice, getDevices, getOneDevice } from '../../api/deviceApi'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const createType = createAsyncThunk(
  'device/createType',
  async (type, thunkApi) => {
    try {
      const response = await postType(type)
      return response
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

export const fetchTypes = createAsyncThunk(
  'device/fetchType',
  async (_, thunkApi) => {
    try {
      const response = await getTypes()
      return response
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

export const createBrand = createAsyncThunk(
  'device/createBrand',
  async (brand, thunkApi) => {
    try {
      const response = await postBrand(brand)
      return response
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

export const fetchBrands = createAsyncThunk(
  'device/fetchBrands',
  async (_, thunkApi) => {
    try {
      const response = await getBrands()
      return response
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

export const createDevice = createAsyncThunk(
  'device/createDevice',
  async (device, thunkApi) => {
    try {
      const response = await postDevice(device)
      return response
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

export const fetchDevices = createAsyncThunk(
  'device/fetchDevices',
  async ({ typeId, brandId, page, limit }, thunkApi) => {
    try {
      const response = await getDevices(typeId, brandId, page, limit)
      return response
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

export const fetchOneDevice = createAsyncThunk(
  'device/fetchOneDevice',
  async (id, thunkApi) => {
    try {
      const response = await getOneDevice(id)
      return response
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)