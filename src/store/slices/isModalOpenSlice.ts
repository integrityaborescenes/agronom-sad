import { createSlice } from "@reduxjs/toolkit";

interface isModalOpen {
    value: boolean;
}

const initialState: isModalOpen = {
    value: false,
};

export const isModalOpenSlice = createSlice({
    name: 'isModalOpen',
    initialState,
    reducers: {
        open: (state) => {
            state.value = true
        },
        close: (state) => {
            state.value = false
        },
    }
})

export const { open, close } = isModalOpenSlice.actions;
export default isModalOpenSlice.reducer;
