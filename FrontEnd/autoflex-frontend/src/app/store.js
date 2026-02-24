import { configureStore } from '@reduxjs/toolkit';
import materialReducer from '../features/materials/materialSlice';
import productReducer from '../features/products/productSlice';

export const store = configureStore({
  reducer: {
    materials: materialReducer,
    products: productReducer,
  },
});