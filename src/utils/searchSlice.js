import { createSlice } from "@reduxjs/toolkit";

//LRU - Least Recently Used cache 
//if(obj.length > 100 => dequeue from start - FIFO)


const searchSlice = createSlice({
    name : "search",
    initialState : {},
    reducers : {
        cacheResults : (state, action) => {
            state = Object.assign(state, action.payload)
        },
    },
});


export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;