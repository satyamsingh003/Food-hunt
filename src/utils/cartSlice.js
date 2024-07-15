import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.card.info.id === newItem.card.info.id
      );
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].count += 1;
      } else {
        state.items.push({ ...newItem, count: 1 });
      }
    },
    removeItem: (state, action) => {
      const remItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.card.info.id === remItem.card.info.id
      );
      if (
        existingItemIndex !== -1 &&
        state.items[existingItemIndex].count > 1
      ) {
        state.items[existingItemIndex].count -= 1;
      } else {
        state.items.pop();
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
