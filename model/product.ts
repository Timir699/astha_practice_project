import { Form } from "./form";

export interface Product {
  name : string;
  img : string;
  weight: number;
  id: string;
  price: number;
  quantity: number;
  description : string;
}

export interface Products {
  products: Product[]
}

export interface CartProduct {
 cartProduct: Product[];
 addCartProduct : (detailsData : Product) => void;
 orderProduct?: Product[];
 addOrderProduct ?: () => void;
 checkOutForm: {};
 addcheckOutForm ?: (data: Form) => void;
 removeProduct : (id: string) => void;
 processComplete ?: () => void
 removeQuantity ?: (id: string) => void
}