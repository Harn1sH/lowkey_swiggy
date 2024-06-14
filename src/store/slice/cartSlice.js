import { createSlice, current } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "CartSlice",
  initialState: {
    items: 0,
  },
  reducers: {
    addItem: (state, action) => {
      console.log("works");
      return { items: state.items + 1 };
    },
    removeItem: (state, action) => {
      console.log("works");
      return { items: state.items - 1 };
    },
    clearCart: (state, action) => {
      return { items: 0 };
    },
  },
});

export default CartSlice.reducer;
export const { addItem, removeItem, clearCart } = CartSlice.actions;
