import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedPrj: {}
}

export const selectedPrjSlice = createSlice({
    name: 'selectedPrj',
    initialState,
    reducers: {
        setSelectedPrj: (state, link) => {
            state.selectedPrj = link.payload
        }
    }
})

export const { setSelectedPrj } = selectedPrjSlice.actions

export default selectedPrjSlice.reducer