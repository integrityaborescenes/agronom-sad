import { configureStore } from "@reduxjs/toolkit";
import VisitorSlice from "./slices/visitorSlice.ts";
import SortedSlice from "./slices/sortedSlice.ts";
import InputSlice from "./slices/inputSlice.ts";
import isModalOpenSlice from "./slices/isModalOpenSlice.ts";
import animationSlice from "./slices/animationSlice.ts";

export const store = configureStore({
    reducer: {
        visitors: VisitorSlice,
        sortedBy: SortedSlice,
        input: InputSlice,
        isModalOpen: isModalOpenSlice,
        whatAnimation: animationSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;