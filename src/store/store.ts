import { configureStore } from "@reduxjs/toolkit";
import VisitorSlice from "./slices/visitorSlice.ts";

export const store = configureStore({
    reducer: {
        visitors: VisitorSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;