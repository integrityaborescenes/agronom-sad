import {createSlice} from "@reduxjs/toolkit";

type sortedSlice = {
    sortedBy: string
}

const initialState : sortedSlice = {
    sortedBy: '',
};

export const sortedSlice = createSlice({
    name: 'sortedVisitors',
    initialState,
    reducers: {
        sortByPresent: (state) => {
            state.sortedBy = '?present=true'
        },
        sortByAbsent: (state) => {
            state.sortedBy = '?present=false'
        },
        resetSorting: (state) => {
            state.sortedBy = ''
        },
    }
})

export const { sortByPresent, sortByAbsent, resetSorting } = sortedSlice.actions;
export default sortedSlice.reducer;
