import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    smsUsers: [],
    count: null,
    smsUser: null,
};

export const smsUserSlice = createSlice({
    name: 'smsUser',
    initialState,
    reducers: {
        getSmsUsers(state, action) {
            state.smsUsers = action.payload.data;
            state.count = action.payload.meta.total;
        },
        getSmsUser(state, action) {
            state.smsUser = action.payload.data;
        },
    }
})

export const { getSmsUser, getSmsUsers } = smsUserSlice.actions;
export default smsUserSlice.reducer;