import {
  configureStore
} from '@reduxjs/toolkit'
import taskReducer from '../Features/Tasks/Tasks'
import apiTaskReducer from '../Features/APITasks/APITasks'
export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    apiTasks: apiTaskReducer,
  },
})