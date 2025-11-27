import { configureStore } from "@reduxjs/toolkit";
import VisitorSlice from "./slices/visitorSlice.ts";
import SortedSlice from "./slices/sortedSlice.ts";
import InputSlice from "./slices/inputSlice.ts";

export const store = configureStore({
    reducer: {
        visitors: VisitorSlice,
        sortedBy: SortedSlice,
        input: InputSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;