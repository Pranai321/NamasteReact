import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:["Burgers","Pizza"]
    },
    reducers:{
        addItem: (state, action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state, action)=>{
            //remove item from state
        },
        clearCart: (state)=>{
            state.items.length = 0;
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice
export default cartSlice.reducer;
