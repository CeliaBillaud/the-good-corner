export interface Category {
  id: number;
  name: string;
}

export interface AdCardProps {
  id: number;
  title: string;
  description?: string;
  author?: string;
  pictureUrl: string;
  price: number;
  link?: string;
  category?: Category;
}

export interface AdDetailsProps {
  id: number;
  title: string;
  description: string;
  price: number;
  author: string;
  pictureUrl: string;
  createdAt: string;
  category: number;
  tags: number[];
}
