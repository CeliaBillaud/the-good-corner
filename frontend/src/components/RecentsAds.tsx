import { useEffect, useState } from "react";
import AdCard, { AdCardProps } from "./AdCard";
import axios from "axios";

const ads: AdCardProps[] = [
  {
    id: 1,
    title: "Table",
    pictureUrl: "/images/table.webp",
    price: 120,
    link: "/ads/table",
  },
  {
    id: 2,
    title: "Dame-jeanne",
    pictureUrl: "/images/dame-jeanne.webp",
    price: 75,
    link: "/ads/dame-jeanne",
  },
  {
    id: 3,
    title: "Vide-poche",
    pictureUrl: "/images/vide-poche.webp",
    price: 4,
    link: "/ads/vide-poche",
  },
  {
    id: 4,
    title: "Vaisselier",
    pictureUrl: "/images/vaisselier.webp",
    price: 900,
    link: "/ads/vaisselier",
  },
  {
    id: 5,
    title: "Bougie",
    pictureUrl: "/images/bougie.webp",
    price: 8,
    link: "/ads/bougie",
  },
  {
    id: 6,
    title: "Porte-magazine",
    pictureUrl: "/images/porte-magazine.webp",
    price: 45,
    link: "/ads/porte-magazine",
  },
];

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
          <div className="ad-card-container">
            <AdCard key={ad.id} {...ad} />
            <button
              className="button"
              onClick={() => setTotal(total + ad.price)}
            >
              Ajouter au panier
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default RecentAds;
