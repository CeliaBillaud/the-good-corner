import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { Category } from "../types";
import { useParams } from "react-router";

type Inputs = {
  title: string;
  description: string;
  author: string;
  price: number;
  pictureUrl: string;
  category: Category;
  tags: Tag[];
};

interface Tag {
  id: number;
  name: string;
}

const NewAdForm = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [ad, setAd] = useState<Inputs | null>(null);

  const { id } = useParams();

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3000/categories");
      setCategories(response.data);
    } catch (error) {
      console.error("An error occured while fetching categories :", error);
    }
  };

  const fetchTags = async () => {
    try {
      const response = await axios.get("http://localhost:3000/tags");
      setTags(response.data);
    } catch (error) {
      console.error("An error occured while fetching tags :", error);
    }
  };

  const fetchAd = async () => {
    try {
      const result = await axios.get(`http://localhost:3000/ads/${id}`);
      setAd(result.data[0]);
      console.log(result.data[0]);
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    if (id) {
      fetchAd();
      fetchCategories();
      fetchTags();
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      console.log(data);
      await axios.put(`http://localhost:3000/ads/${id}`, data);
    } catch (error) {
      console.error("An error occured while posting the ad :", error);
    }
  };

  return (
    <>
      {ad && (
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.title && <span>This field is required</span>}

          {/* register your input into the hook by invoking the "register" function */}
          <label>Titre</label>
          <br />
          <input
            defaultValue={ad.title}
            {...register("title", { required: true })}
          />

          <br />
          <br />

          <label>Description</label>
          <br />
          <input
            defaultValue={ad.description}
            {...register("description", { required: true })}
          />
          <br />
          <br />

          <label>Author</label>
          <br />
          <input
            defaultValue={ad.author}
            {...register("author", { required: true })}
          />
          <br />
          <br />

          <label>Price</label>
          <br />
          <input
            defaultValue={ad.price}
            {...register("price", { required: true })}
          />
          <br />
          <br />

          <label>Lien de l'image</label>
          <br />
          <input
            defaultValue={ad.pictureUrl}
            {...register("pictureUrl", { required: true })}
          />
          <br />
          <br />

          <label>Category</label>
          <br />
          <select {...register("category")} defaultValue={ad.category.id}>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
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
                <input
                  type="checkbox"
                  value={tag.id}
                  {...register("tags")}
                  defaultChecked={ad.tags.some((adTag) => adTag.id === tag.id)}
                />
                <label>{tag.name}</label>
              </div>
            ))}
          </fieldset>

          <br />

          <input type="submit" />
        </form>
      )}
    </>
  );
};

export default NewAdForm;
