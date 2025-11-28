import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

type inputSlice = {
    inputText: string
}

const initialState : inputSlice = {
    inputText: '',
};

export const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        inputText: (state, action: PayloadAction<string>) => {
            state.inputText = action.payload;
        },
    }
})

export const { inputText } = inputSlice.actions;
export default inputSlice.reducer;
