import { Link } from "react-router";
import { AdCardProps } from "../types";

const AdCard = ({ title, pictureUrl, price }: AdCardProps) => {
  return (
    <>
      <img className="ad-card-image" src={pictureUrl} alt={title} />
      <div className="ad-card-text">
        <div className="ad-card-title">{title}</div>
        <div className="ad-card-price">{price} €</div>
      </div>
    </>
  );
};

export default AdCard;
