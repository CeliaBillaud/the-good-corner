import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AdCard from "../components/AdCard";
import { AdCardProps } from "../types";

const AdsByCategory = () => {
  const { id } = useParams();
  const [ads, setAds] = useState<AdCardProps[]>([]);
  const [categoryName, setCategoryName] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const result = await axios.get<AdCardProps[]>(
        `http://localhost:3000/ads/categories/${id}`
      );
      setAds(result.data);
      if (result.data.length > 0 && result.data[0].category) {
        setCategoryName(result.data[0].category.name); // Prendre le nom de la catégorie de la première annonce
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(ads);
  }, [id]);

  return (
    <>
      <h2>Annonce de la catégorie {categoryName}</h2>
      <section className="recent-ads">
        {ads.map((ad) => (
          <div className="ad-card-container" key={ad.id}>
            <AdCard {...ad} />
          </div>
        ))}
      </section>
    </>
  );
};

export default AdsByCategory;
