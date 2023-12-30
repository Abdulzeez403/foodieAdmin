export interface IOrder {
  _id: string;
  totalAmount: string;
  status: string;
  cart: ICart[];
}

export interface ICart {
  _id: string;
  name: string;
  price: string;
  image: IImage[];
}

export interface IImage {
  uri: any;
  type: string;
  name: string;
}
