import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { AdDetailsProps } from "../types";

const AdDetails = () => {
  const [ad, setAd] = useState<AdDetailsProps | null>(null);
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const result = await axios.get(`http://localhost:3000/ads/${id}`);
      console.log(result.data[0]);
      setAd(result.data[0]);
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const formattedDate = ad?.createdAt
    ? new Date(ad.createdAt).toLocaleString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  const navigate = useNavigate();

  return (
    <>
      {ad && (
        <>
          <h2 className="ad-details-title">{ad.title}</h2>
          <section className="ad-details">
            <div className="ad-details-image-container">
              <img className="ad-details-image" src="/images/table.webp" />
            </div>
            <div className="ad-details-info">
              <div className="ad-details-price">{ad.price} €</div>
              <div className="ad-details-description">{ad.description}</div>
              <hr className="separator" />
              <div className="ad-details-owner">
                Annonce publiée par <b>{ad.author}</b> le {formattedDate}.
              </div>
              <a
                href="mailto:serge@serge.com"
                className="button button-primary link-button"
              >
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  className="styled__BaseIcon-sc-1jsm4qr-0 llmHhT"
                  stroke="currentcolor"
                  strokeWidth="2.5"
                  fill="none"
                >
                  <path d="M25 4H7a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h18a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5ZM7 6h18a3 3 0 0 1 2.4 1.22s0 0-.08 0L18 15.79a3 3 0 0 1-4.06 0L4.68 7.26H4.6A3 3 0 0 1 7 6Zm18 20H7a3 3 0 0 1-3-3V9.36l8.62 7.9a5 5 0 0 0 6.76 0L28 9.36V23a3 3 0 0 1-3 3Z"></path>
                </svg>
                Envoyer un email
              </a>
              <button
                onClick={async () => {
                  try {
                    await axios.delete(`http://localhost:3000/ads/${ad.id}`);
                    navigate("/");
                  } catch (err) {
                    console.log("error", err);
                  }
                }}
                className="button button-primary link-button"
              >
                Supprimer Annonce
              </button>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default AdDetails;
