import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [
    
    { id: 1, title: "Laptop", description: "High performance laptop", price: 1200 },
    { id: 2, title: "Phone", description: "Latest smartphone", price: 800 },
    { id: 3, title: "Headphones", description: "Noise-cancelling headphones", price: 200 },
    { id: 4, title: "Smartwatch", description: "Track your health", price: 300 }
  ],

  reducers: {
    addProduct: (state, action) => {
      state.push({
        id: Date.now(),
        ...action.payload
      });
    }
  }
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
