import { configureStore } from "@reduxjs/toolkit";
import reduxdata from './Sliceproduct/Slice';
export const Store = configureStore({
  reducer: {
    cart:reduxdata ,
  },
});
