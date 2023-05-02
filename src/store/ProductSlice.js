import { createSlice, nanoid } from '@reduxjs/toolkit'


export const ProductSlice = createSlice({
  name: "product",
  initialState:{list:[]},
  reducers: {
    addProduct: {
      reducer: (state, action) => {
        state.list.push(action.payload);
      },
      prepare: (product) => {
        const id = nanoid();
        const newProduct = { id, ...product};
        return { payload: newProduct };
      },
    },
      
    
    deleteProduct: (state, action) => {
      state.list = state.list.filter((product) => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
      state.list=state.list.map((product)=>{
        if(product.id===action.payload.id){
            return action.payload;
        }
        return product;
      })
    },
  },
})


export const { addProduct, deleteProduct, updateProduct } = ProductSlice.actions

export default ProductSlice.reducer
