import { configureStore } from '@reduxjs/toolkit'
// import {createWrapper} from 'next-redux-wrapper'
import HomePageSlice from '../Slices/HomePageSlice/HomePageSlice'

// export const makeStore = ()=> configureStore({
const store = configureStore({
  reducer: {
    HomePageSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
})

export default store

// export const wrapper = createWrapper(makeStore)
