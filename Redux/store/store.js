import { configureStore } from '@reduxjs/toolkit'
import {createWrapper} from 'next-redux-wrapper'
import HomePageSlice from '../Slices/HomePageSlice/HomePageSlice'
// import scoreBoardSlice from '../Slices/scoreBoardSlice/scoreBoardSlice'

export const store = configureStore({
  reducer: {
    HomePageSlice: HomePageSlice,
    // scoreBoardSlice : scoreBoardSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const wrapper = createWrapper(store)