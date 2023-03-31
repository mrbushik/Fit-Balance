export interface productItem {
  img: string;
  title: string;
  price: number;
  sizes?: string[];
  titles?: string[];
  descriptions?: string[];
  listName?: string;
  listInfo?: string[];
}
export interface pagesListInterface {
  link: string;
  name: string;
}

export interface cartItem {
  id: string;
  title?: string;
  img?: string;
  price: number;
  count: number;
  size: string;
  unitPrice?: number;
}
