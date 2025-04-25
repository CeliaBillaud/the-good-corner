import { useParams, useNavigate } from "react-router";
import {
  useDeleteAdMutation,
  useGetAdByIdQuery,
} from "../generated/graphql-types";

const AdDetails = () => {
  const { id } = useParams();

  const { data, loading, error } = useGetAdByIdQuery({
    variables: { getAdByIdId: Number(id) },
  });

  const [deleteAd] = useDeleteAdMutation({
    variables: {
      deleteAdId: Number(id),
    },
  });

  const formattedDate = data?.getAdById.createdAt
    ? new Date(data?.getAdById.createdAt).toLocaleString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  const navigate = useNavigate();

  if (loading) return <p>Wait for it...</p>;
  if (error) return <p>Woops, on a tout cassé</p>;

  return (
    <>
      {data?.getAdById && (
        <>
          <h2 className="ad-details-title">{data?.getAdById.title}</h2>
          <section className="ad-details">
            <div className="ad-details-image-container">
              <img className="ad-details-image" src="/images/table.webp" />
            </div>
            <div className="ad-details-info">
              <div className="ad-details-price">{data?.getAdById.price} €</div>
              <div className="ad-details-description">
                {data?.getAdById.description}
              </div>
              <hr className="separator" />
              <div className="ad-details-owner">
                Annonce publiée par <b>{data?.getAdById.author}</b> le{" "}
                {formattedDate}.
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
                    await deleteAd({ variables: { deleteAdId: Number(id) } });
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
