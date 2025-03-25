import { Link } from "react-router";

export interface AdCardProps {
  id: number;
  title: string;
  imgUrl: string;
  price: number;
  link: string;
}

const AdCard = ({ title, imgUrl, price, link }: AdCardProps) => {
  return (
    <div className="ad-card-container">
      <Link className="ad-card-link" to={link}>
        <img className="ad-card-image" src={imgUrl} alt={title} />
        <div className="ad-card-text">
          <div className="ad-card-title">{title}</div>
          <div className="ad-card-price">{price} €</div>
        </div>
      </Link>
    </div>
  );
};

export default AdCard;
