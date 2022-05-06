import  { configureStore } from "@reduxjs/toolkit";
import personReducer from './Slice/personSlice';
import personDetailSlice from "./Slice/personDetailSlice";
export  const store = configureStore({
    reducer : {
        person : personReducer,
        detail : personDetailSlice
    }
})

export  default  store;