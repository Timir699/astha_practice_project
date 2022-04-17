import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { CreateOrder } from '../model/createOrder';
import { Form } from '../model/form';
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
  checkOutForm: {},
  addcheckOutForm: (data: Form) => {
    set((state) => ({ 
      checkOutForm:  { ...state.checkOutForm, data} }))
  },
  createOrder: {},
  addCreateOrder: (orderCreate : CreateOrder) => {
    set((state) => ({ 
      createOrder:  { ...state.createOrder, orderCreate} }))
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