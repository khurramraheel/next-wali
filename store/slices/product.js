import { createSlice } from "@reduxjs/toolkit";

export let productSlice = createSlice({
    name:"product-slice",
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart:(state, action)=>{

    state.cart.push(action.payload);

        },
        removeFromCart:(state, action)=>{
            
        }
    }
});

export let {addToCart, removeFromCart} =  productSlice.actions;