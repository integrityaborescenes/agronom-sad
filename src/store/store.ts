import { configureStore } from "@reduxjs/toolkit";
import VisitorSlice from "./slices/visitorSlice.ts";
import SortedSlice from "./slices/sortedSlice.ts";

export const store = configureStore({
    reducer: {
        visitors: VisitorSlice,
        sortedBy: SortedSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;