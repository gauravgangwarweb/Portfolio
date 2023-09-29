import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hide: true
}

export const hideSlice = createSlice({
    name: 'hide',
    initialState,
    reducers: {
        setHide: (state, link) => {
            state.hide = link.payload
        }
    }
})

export const { setHide } = hideSlice.actions

export default hideSlice.reducer