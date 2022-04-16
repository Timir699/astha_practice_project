import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { CartProduct, Product } from '../model/product';

export let useStore = create<CartProduct>(devtools((set) => ({
  cartProduct: [],
  addCartProduct: (detailsData : Product) => {
    set((state) => ({ 
      cartProduct:  [ ...state.cartProduct, detailsData] }))
  },
  orderProduct: [],
  addOrderProduct: () => {
    set((state) => ({ 
      orderProduct:  [ ...state.orderProduct, ...state.cartProduct] }))
  },
  removeProduct: (id) => {
    set((state) => ({
      cartProduct: state.cartProduct.filter((product) => product.id !== id),
    }));
  },
  removeQuantity: (id) => {
    set((state: any) => ({
      cartProduct: state.cartProduct.map((product: Product) => {
        if (product.id === id) {
          product.quantity = product.quantity - 1
        }
        return product
      }),
    }));
  },
  processComplete: () => {
    set((state) => ({ 
      cartProduct:  [] }))
  },
})))