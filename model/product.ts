export interface Product {
  name : string;
  img : string;
  weight: number;
  id: number;
  price: number;
  description : string;
}

export interface Products {
  products: Product[]
}