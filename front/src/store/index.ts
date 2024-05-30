import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from './slice';
import { useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
  user: userSlice
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()