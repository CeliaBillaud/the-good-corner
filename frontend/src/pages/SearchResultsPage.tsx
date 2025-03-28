import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router";
import { AdCardProps } from "../types";
import AdCard from "../components/AdCard";

const SearchResultsPage = () => {
  const [searchResults, setSearchResults] = useState<AdCardProps[]>([]);

  // Utilise useSearchParams pour récupérer les paramètres de l'URL
  // Permet d'accéder aux paramètres de requête (comme ?q=terme)
  const [searchParams] = useSearchParams();

  // Hook useEffect pour effectuer des effets de bord
  // S'exécute quand les paramètres de recherche changent
  useEffect(() => {
    // Récupère le terme de recherche depuis les paramètres d'URL
    const term = searchParams.get("q");

    // Fonction asynchrone pour fetcher les résultats de recherche
    const fetchSearchResults = async () => {
      // Vérifie si un terme de recherche existe
      if (term) {
        try {
          // Fait une requête GET à l'API pour rechercher des annonces
          // Utilise le paramètre title pour la recherche
          const response = await axios.get(`http://localhost:3000/ads`, {
            params: { title: term },
          });

          // Met à jour l'état avec les résultats de la recherche
          setSearchResults(response.data);
        } catch (error) {
          // Gère les erreurs potentielles lors de la recherche
          console.error("Erreur lors de la recherche :", error);
        }
      }
    };

    // Appelle la fonction de recherche
    fetchSearchResults();

    // Dépendance : relance la recherche si les paramètres changent
  }, [searchParams]);

  // Rendu du composant
  return (
    <div>
      {/* Affiche le terme de recherche */}
      <h1>Résultats de recherche pour : "{searchParams.get("q")}"</h1>
      <section className="recent-ads">
        {/* Mappe sur les résultats de recherche et affiche chaque résultat */}
        {searchResults.map((result) => (
          // Chaque résultat est affiché dans un div avec un id unique comme clé
          <div key={result.id} className="ad-card-container">
            {/* Utilise le composant AdCard pour afficher les détails de l'annonce */}
            <AdCard
              id={result.id}
              title={result.title}
              description={result.description}
              price={result.price}
              pictureUrl={result.pictureUrl}
            />
          </div>
        ))}
      </section>
      {/* Affiche un message si aucun résultat n'est trouvé */}
      {searchResults.length === 0 && (
        <p>Aucun résultat trouvé pour cette recherche.</p>
      )}
    </div>
  );
};

// Exporte le composant par défaut
export default SearchResultsPage;
