export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice: number | null;
  isNew: boolean;
  image: string;
}
