import { configureStore } from "@reduxjs/toolkit";
import objectSlice from "./objectSlice";

export const store = configureStore({
  reducer: {
    objects: objectSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
