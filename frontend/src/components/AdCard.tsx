import { Link } from "react-router";
import { Category } from "../../pages/NewAdForm";

export interface AdCardProps {
  id: number;
  title: string;
  pictureUrl: string;
  price: number;
  link: string;
  category?: Category;
}

const AdCard = ({ title, pictureUrl, price, link }: AdCardProps) => {
  return (
    <Link className="ad-card-link" to={link}>
      <img className="ad-card-image" src={pictureUrl} alt={title} />
      <div className="ad-card-text">
        <div className="ad-card-title">{title}</div>
        <div className="ad-card-price">{price} €</div>
      </div>
    </Link>
  );
};

export default AdCard;
