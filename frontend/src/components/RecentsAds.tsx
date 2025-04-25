import { useState } from "react";
import AdCard from "./AdCard";
import { Link } from "react-router";
import { useGetAllAdsQuery } from "../generated/graphql-types";

const RecentAds = () => {
  const [total, setTotal] = useState(0);

  const { data, loading, error } = useGetAllAdsQuery();
  if (loading) return <p>Wait for it...</p>;
  if (error) return <p>Woops, on a tout cassé</p>;
  return (
    <>
      <h2>Annonces récentes</h2>
      <p>Total: {total}€</p>
      <section className="recent-ads">
        {data?.getAllAds.map((ad) => (
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
