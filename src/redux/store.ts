import { configureStore } from "@reduxjs/toolkit";
import roleSlice from "./slices/roleSlice";
import smsUserSlice from "./slices/smsUserSlice";
import sentSmsSlice from "./slices/sentSmsSlice";

const store = configureStore({
    reducer: {
        role: roleSlice,
        smsUser: smsUserSlice,
        sentSms: sentSmsSlice,
    },
})

export default store;