import { createSlice } from "@reduxjs/toolkit";
const initialState={
      cartItemList: [], // cart me jo items hain
  addressList: [],    // new address list

}
const Slice=createSlice({
    name:'data',
    initialState,
    reducers:{
         Addtocart:(state,action)=>{
            state.cartItemList.push(action.payload)
         },
         Removefromcart:(state,action)=>{
           state.cartItemList= state.cartItemList.filter(item=>item.id!==action.payload)
         },
            AddAddress:(state,action)=>{
            state.addressList.push(action.payload)
         },
            // ✅ Remove Address
    RemoveAddress: (state, action) => {
      state.addressList = state.addressList.filter(
        item => item.id !== action.payload
      );
    }
    }
})
export  const {Addtocart,Removefromcart,AddAddress,RemoveAddress} =Slice.actions
export default Slice.reducer