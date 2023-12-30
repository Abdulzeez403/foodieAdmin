export interface IMenu {
  _id?: string;
  name?: string;
  description?: string;
  price?: string;
  soldout?: boolean;
  images?: IImage[];
}

export interface IImage {
  uri: any;
  type: string;
  name: string;
}
