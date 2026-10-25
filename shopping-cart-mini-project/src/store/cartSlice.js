import { createSlice } from '@reduxjs/toolkit';

const STORAGE_KEY = 'shopping-cart-mini-project-cart';

function loadCart() {
  try {
    const savedCart = localStorage.getItem(STORAGE_KEY);
    if (!savedCart) return [];
    const parsedCart = JSON.parse(savedCart);
    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch {
    return [];
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadCart(),
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingItem = state.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.find((product) => product.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity(state, action) {
      const item = state.find((product) => product.id === action.payload);
      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        return state.filter((product) => product.id !== action.payload);
      }
    },
    clearCart() {
      return [];
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
