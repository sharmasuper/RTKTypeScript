import { configureStore } from "@reduxjs/toolkit";
import { studentApi } from "../Feature/StudentSlices";

export const Store = configureStore({
    reducer:{
        [studentApi.reducerPath]: studentApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(studentApi.middleware),
})