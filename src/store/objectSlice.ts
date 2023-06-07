import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ObjectData {
  id: string;
  name: string;
  quantity: number;
  deliveryDate: string;
  price: number;
  currency: string;
}

interface ObjectState {
  objects: ObjectData[];
}

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
