import { configureStore } from "@reduxjs/toolkit";
import objectSlice from "./objectSlice";
import modalSlice from "./modalSlice";

export const store = configureStore({
  reducer: {
    objects: objectSlice,
    modal: modalSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
