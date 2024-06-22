import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ProductSlice from "./ProductSlice";

const Store=configureStore({
    reducer:{
        cart: CartSlice,
        products: ProductSlice
    }
})

export default Store
