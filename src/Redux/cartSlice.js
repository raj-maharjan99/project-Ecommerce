import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  quantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      const isItemExist = state.items.find((item) => item.id === payload.id);

      if (!isItemExist) {
        state.items = [...state.items, { ...payload, quantity: 1 }];
      } else {
        state.items = state.items.map((item) => {
          if (item.id === payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
      state.quantity++;
      state.totalAmount += payload.price;
    },
    removeItem: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload.id);
      state.quantity -= payload.quantity;
    },
    addItemQuantity: (state, { payload }) => {
      state.items = state.items.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      state.quantity++;
      state.totalAmount += payload.price;
    },
    subtractItemQuantity: (state, { payload }) => {
      const subItem = state.items.find((item) => item.id === payload.id);
      if (subItem.quantity === 1) {
        state.items == state.items.filter((item) => item.id !== subItem.id);
      } else {
        subItem.quantity -= 1;
      }
      state.quantity--;
      state.totalAmount -= subItem.price;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, addItemQuantity, subtractItemQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
