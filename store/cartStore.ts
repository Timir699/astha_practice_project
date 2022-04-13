import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { CartProduct, Product } from '../model/product';

export let useStore = create<CartProduct>(devtools((set) => ({
  cartProduct: [],
  addCartProduct: (detailsData : Product) => {
    set((state) => ({ 
      cartProduct:  [ ...state.cartProduct, detailsData] }))
  },
})))