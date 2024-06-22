import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StatusCode from "../../Util/StatusCode";

const initialState = {
    data: [],
}
const ProductSlice = createSlice({
    name: 'products',
    initialState,
    // reducers: {
    //     fetchProducts(state, action) {
    //         state.data = action.payload
    //     }
    // },

    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.status = StatusCode.LOADING // for loading process
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.data = action.payload; 
                state.status = StatusCode.IDLE // for idle 
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = StatusCode.ERROR // for error
            })
    }
})

export const { fetchProducts } = ProductSlice.actions;
export default ProductSlice.reducer;

export const getProducts = createAsyncThunk('products/get', async () => {
    const data = await fetch("https://fakestoreapi.com/products")
    const result = data.json()
    return result;
})

//     export function getProducts(){
//     return async function getProductsThunk(dispatch, getstate) {
//         const data = await fetch("https://fakestoreapi.com/products")
//         const result = data.json()
//         dispatch(fetchProducts(result))
//     }
// }