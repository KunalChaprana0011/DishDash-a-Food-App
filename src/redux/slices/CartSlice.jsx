import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  //name of the slice
  // initial state of the slice
  // Reducers (actions) of the slice

  name: "cart",
  initialState: {
    // cart ki state intitally empty object hogi
    cart: [],
  },

  reducers: {
    //functions jo hum upar jo initial state me cart banaya hai usme jo functions lagyenge woh

    // add to cart
    addToCart: (state, action) => {
      //state hai cart: [], iski state
      //action hai jo is state pe lagana hai
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.cart.push(action.payload);
      }

      //payload wo data jo receive hua hai

      // call krte time addToCart(data) ye data hi payload hai
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    incrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
    },
    decrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
      );
    },
  },
});

export const { addToCart, removeFromCart,incrementQty,decrementQty } = CartSlice.actions;

export default CartSlice.reducer;
