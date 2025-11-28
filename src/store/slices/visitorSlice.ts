import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

type Visitor = {
    id: number,
    fullName: string,
    company: string,
    group: string,
    present: boolean,
}

type VisitorState = {
    visitors: Visitor[],
}

const initialState : VisitorState = {
    visitors: [],
};

export const visitorSlice = createSlice({
    name: 'visitors',
    initialState,
    reducers: {
        setVisitors: (state, action: PayloadAction<Visitor[]>) => {
            state.visitors = action.payload;
        },
        addVisitor: (state, action: PayloadAction<Visitor>) => {
            state.visitors.push(action.payload)
        },
        removeVisitor: (state, action: PayloadAction<Visitor>) => {
            state.visitors = state.visitors.filter(v => v.id !== action.payload.id)
        },
        editVisitor: (state, action: PayloadAction<Visitor>) => {
            state.visitors = state.visitors.map(v => v.id === action.payload.id ? action.payload : v)
        }
    }
})

export const { setVisitors, addVisitor, removeVisitor, editVisitor } = visitorSlice.actions;

export default visitorSlice.reducer;
