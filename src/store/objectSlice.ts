import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ObjectData, ObjectState } from "../types/objectTypes";

const objectSlice = createSlice({
  name: "cards",
  initialState: { objects: [] } as ObjectState,

  reducers: {
    setObjects(state, action: PayloadAction<ObjectData[]>) {
      state.objects = action.payload;
    },
  },
});

export const { setObjects } = objectSlice.actions;
export default objectSlice.reducer;
