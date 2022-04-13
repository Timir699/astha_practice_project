import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { CartProduct, Product } from '../model/product';

export let useStore = create<CartProduct>(devtools((set) => ({
  cartProduct: [],
  myOrderProduct: [],
  addCartProduct: (detailsData : Product) => {
    set((state) => ({ 
      cartProduct:  [ ...state.cartProduct, detailsData] }))
  },
  addAllCartProduct: (AllCartProduct : Product[]) => {
    console.log(AllCartProduct);
    set((state) => ({ 
      myOrderProduct: AllCartProduct }))
  },
})))