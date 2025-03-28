import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { Category } from "../types";

type Inputs = {
  title: string;
  description: string;
  author: string;
  price: number;
  pictureUrl: string;
  category: number;
  tags: string[];
};

interface Tag {
  id: number;
  name: string;
}

const NewAdForm = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);

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

  useEffect(() => {
    fetchCategories();
    fetchTags();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      console.log(data);
      await axios.post("http://localhost:3000/ads", data);
    } catch (error) {
      console.error("An error occured while posting the ad :", error);
    }
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors.title && <span>This field is required</span>}

      {/* register your input into the hook by invoking the "register" function */}
      <label>Titre</label>
      <br />
      <input
        defaultValue="Je vends ma 206"
        {...register("title", { required: true })}
      />

      <br />
      <br />

      <label>Description</label>
      <br />
      <input
        defaultValue="Super 206"
        {...register("description", { required: true })}
      />
      <br />
      <br />

      <label>Author</label>
      <br />
      <input defaultValue="Jean" {...register("author", { required: true })} />
      <br />
      <br />

      <label>Price</label>
      <br />
      <input defaultValue="2000" {...register("price", { required: true })} />
      <br />
      <br />

      <label>Lien de l'image</label>
      <br />
      <input
        defaultValue="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkRGcnX3rwkJX7ZDm49JqFa2OLnNjyXyxNlw&s"
        {...register("pictureUrl", { required: true })}
      />
      <br />
      <br />

      <label>Category</label>
      <br />
      <select {...register("category")} defaultValue={categories[0]?.id}>
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
            <input type="checkbox" value={tag.id} {...register("tags")} />
            <label>{tag.name}</label>
          </div>
        ))}
      </fieldset>

      <br />

      <input type="submit" />
    </form>
  );
};

export default NewAdForm;
