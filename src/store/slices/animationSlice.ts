import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

type animationSlice = {
    animation: string
}

const initialState : animationSlice = {
    animation: '',
};

export const animationSlice = createSlice({
    name: 'animation',
    initialState,
    reducers: {
        whatAnimation: (state, action: PayloadAction<string>) => {
            state.animation = action.payload;
        },
    }
})

export const { whatAnimation } = animationSlice.actions;
export default animationSlice.reducer;
