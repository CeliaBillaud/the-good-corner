import axios from "axios";
import { useEffect, useState } from "react";

interface Category {
  id: number;
  name: string;
}

interface Tag {
  id: number;
  name: string;
}

const NewAdForm = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);

  const fetchCategories = async () => {
    try {
      const result = await axios.get<Category[]>(
        "http://localhost:3000/categories"
      );
      setCategories(result.data);
      console.log(result.data);
    } catch (err) {
      console.log("error", err);
    }
  };

  const fetchTags = async () => {
    try {
      const result = await axios.get<Tag[]>("http://localhost:3000/tags");
      setTags(result.data);
      console.log(result.data);
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchTags();
  }, []);

  const addAd = async (adData: any) => {
    // Crée un objet avec les données
    const adJson = {
      title: adData.title,
      description: adData.description,
      author: adData.author,
      price: adData.price,
      category: adData.category,
      pictureUrl: adData.pictureUrl, // Assure-toi que pictureUrl est bien ici
      tags: adData.tags, // Si tu as des tags, assure-toi qu'ils sont également inclus
    };

    try {
      const result = await axios.post("http://localhost:3000/ads", adJson, {
        headers: {
          "Content-Type": "application/json", // Utilise JSON pour envoyer les données
        },
      });
      console.log("Annonce ajoutée :", result.data);
    } catch (err) {
      console.error("Erreur lors de l'ajout :", err);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        let formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        addAd(formJson);
      }}
    >
      <label htmlFor="title">Titre de l'&apos;annonce</label>
      <br />
      <input type="text" id="title" name="title" className="text-field" />
      <br />
      <br />

      <label htmlFor="description">Description</label>
      <br />
      <input
        type="text"
        id="description"
        name="description"
        className="text-field"
      />
      <br />
      <br />

      <label htmlFor="author">Ton Nom</label>
      <br />
      <input type="text" id="author" name="author" className="text-field" />
      <br />
      <br />

      <label htmlFor="price">Prix</label>
      <br />
      <input type="number" id="price" name="price" className="text-field" />
      <br />
      <br />

      <label htmlFor="pictureUrl">URL de l&apos;image</label>
      <br />
      <input
        type="text"
        id="pictureUrl"
        name="pictureUrl"
        className="text-field"
      />
      <br />
      <br />

      <label htmlFor="category" id="category">
        Catégorie
      </label>
      <br />
      <select name="category" id="category">
        {categories.map((category) => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <br />
      <br />

      <fieldset>
        <legend>Tags</legend>
        {tags.map((tag) => (
          <div key={tag.id}>
            <input type="checkbox" id={tag.name} name="tags" value={tag.id} />
            <label htmlFor={tag.name}>{tag.name}</label>
          </div>
        ))}
      </fieldset>

      <br />
      <br />

      <button type="submit">Poster</button>
    </form>
  );
};

export default NewAdForm;
