import { createSlice } from "@reduxjs/toolkit";



const active = 'home'

const activeSlice = createSlice({
    name: "active",
    initialState: 'home',

    reducers: {
        set_active(state, action) {
            const { payload } = action;
            state.active = payload
        },
    }
});

export default activeSlice.reducer;