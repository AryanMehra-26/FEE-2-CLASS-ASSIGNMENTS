import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice.js';

const STORAGE_KEY = 'shopping-cart-mini-project-cart';

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

// Save cart changes in the browser so the cart is kept after a refresh.
store.subscribe(() => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store.getState().cart));
  } catch {
    // The app can still be used if browser storage is unavailable.
  }
});
