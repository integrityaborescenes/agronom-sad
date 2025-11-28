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
    }
})

export const { setVisitors, addVisitor } = visitorSlice.actions;

export default visitorSlice.reducer;
