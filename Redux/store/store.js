import { configureStore } from '@reduxjs/toolkit'
import {createWrapper} from 'next-redux-wrapper'
import HomePageSlice from '../Slices/HomePageSlice/HomePageSlice'

export const makeStore = ()=> configureStore({
  reducer: {
    HomePageSlice: HomePageSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    devTools : true,
})

export const wrapper = createWrapper(makeStore)