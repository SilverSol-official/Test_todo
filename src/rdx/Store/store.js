import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../Features/Tasks/Tasks'
export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
})