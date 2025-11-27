import {createSlice} from "@reduxjs/toolkit";

type sortedSlice = {
    sortedBy: string
}

const initialState : sortedSlice = {
    sortedBy: 'none',
};

export const sortedSlice = createSlice({
    name: 'sortedVisitors',
    initialState,
    reducers: {
        sortByPresent: (state) => {
            state.sortedBy = 'present'
        },
        sortByAbsent: (state) => {
            state.sortedBy = 'absent'
        },
        resetSorting: (state) => {
            state.sortedBy = 'none'
        },
    }
})

export const { sortByPresent, sortByAbsent, resetSorting } = sortedSlice.actions;
export default sortedSlice.reducer;
