import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

type Visitor = {
    id: number,
    fullName: string,
    company: string,
    group: string,
    present: boolean,
}

type ModelState = {
    value: boolean,
    edit: boolean,
    currentVisitor?: Visitor,

}

const initialState: ModelState = {
    value: false,
    edit: false,
};


export const isModalOpenSlice = createSlice({
    name: 'isModalOpen',
    initialState,
    reducers: {
        open: (state) => {
            state.value = true
            state.edit = false
        },
        close: (state) => {
            state.value = false
            state.edit = false
        },
        openEdit: (state, action: PayloadAction<Visitor>) => {
            state.value = true
            state.edit = true
            state.currentVisitor = action.payload
        },
    }
})

export const { open, close, openEdit } = isModalOpenSlice.actions;
export default isModalOpenSlice.reducer;
