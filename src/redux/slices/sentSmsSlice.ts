import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sentSmses: [],
    count: null,
    sentSms: null,
};

export const sentSmsSlice = createSlice({
    name: 'sentSms',
    initialState,
    reducers: {
        getSentSmses(state, action) {
            state.sentSmses = action.payload.data;
            state.count = action.payload.meta.total;
        },
        getSentSms(state, action) {
            state.sentSms = action.payload.data;
        },
    }
})

export const { getSentSms, getSentSmses } = sentSmsSlice.actions;
export default sentSmsSlice.reducer;