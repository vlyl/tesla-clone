import { createSlice } from '@reduxjs/toolkit'

const initState = {
  cars: ['Model S', 'Model 3', 'Model X', 'Model Y'],
}

const carSlice = createSlice({
  name: 'car',
  initialState: initState,
  reducers: {},
})

export const selectCars = (state) => state.car.cars

export default carSlice.reducer
