import { useEffect, useState } from "react";
import AdCard from "./AdCard";
import { AdCardProps } from "../types";
import axios from "axios";
import { Link } from "react-router";

const RecentAds = () => {
  const [total, setTotal] = useState(0);
  const [ads, setAds] = useState<AdCardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get<AdCardProps[]>(
          "http://localhost:3000/ads"
        );
        setAds(result.data);
      } catch (err) {
        console.log("error", err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>Annonces récentes</h2>
      <p>Total: {total}€</p>
      <section className="recent-ads">
        {ads.map((ad) => (
          <Link to={`/ads/${ad.id}`} className="ad-card-container" key={ad.id}>
            <AdCard {...ad} />
            <button
              className="button"
              onClick={() => setTotal(total + ad.price)}
            >
              Ajouter au panier
            </button>
          </Link>
        ))}
      </section>
    </>
  );
};

export default RecentAds;
