import { createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
    name : "buttons",
    initialState : {
        ctgryId : 0,
    },
    reducers : {
        changeCtgry : (state, action) => {
            state.ctgryId = action.payload.id;
        },
    },
});


export const { changeCtgry } = buttonSlice.actions;
export default buttonSlice.reducer;