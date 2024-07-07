import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'tasks',
    initialState: {
       tasks: null
    }
})

export const tasksReducer = authSlice.reducer