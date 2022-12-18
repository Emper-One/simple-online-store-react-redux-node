import { createSlice } from '@reduxjs/toolkit'
import { 
  fetchTypes, 
  fetchBrands, 
  fetchDevices, 
  fetchOneDevice 
} from '../action/DeviceAction'


const initialState = {
  types: [],
  brands: [],
  devices: [],
  oneDevice: [],
  selectedType: {},
  selectedBrand: {},
  page: 1,
  totalCount: 0,
  limit: 3
}

export const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    setSelectedType: (state, action) => {
      state.selectedType = action.payload
    }, 
    setSelectedBrand: (state, action) => {
      state.selectedBrand = action.payload
    },
    setPage: (state, action) => {
      state.page = action.payload
    }
  },
  extraReducers: {
    [fetchTypes.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = null
      state.types = action.payload
    },
    [fetchTypes.pending]: (state) => {
      state.isLoading = true
    },
    [fetchTypes.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    [fetchBrands.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = null
      state.brands = action.payload
    },
    [fetchBrands.pending]: (state) => {
      state.isLoading = true
    },
    [fetchBrands.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    [fetchDevices.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = null
      state.devices = action.payload.rows
      state.totalCount = action.payload.count
    },
    [fetchDevices.pending]: (state) => {
      state.isLoading = true
    },
    [fetchDevices.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    [fetchOneDevice.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = null
      state.oneDevice = action.payload
    },
    [fetchOneDevice.pending]: (state) => {
      state.isLoading = true
    },
    [fetchOneDevice.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

const { actions, reducer } = deviceSlice

export const { setSelectedType, setSelectedBrand, setPage } = actions

export default reducer