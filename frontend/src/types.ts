export interface Category {
  id: number;
  name: string;
}

export interface AdCardProps {
  id: number;
  title: string;
  pictureUrl: string;
  price: number;
  link: string;
  category?: Category;
}
