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