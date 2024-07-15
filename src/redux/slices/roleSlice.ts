import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    roles: [],
    count: null,
    role: null,
};

export const roleSlice = createSlice({
    name: 'role',
    initialState,
    reducers: {
        getRoles(state, action) {
            state.roles = action.payload.data;
            state.count = action.payload.meta.total;
        },
        getRole(state, action) {
            state.role = action.payload.data;
        },
    }
})

export const { getRole, getRoles } = roleSlice.actions;
export default roleSlice.reducer;