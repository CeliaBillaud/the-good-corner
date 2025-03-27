import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

type Inputs = {
  name: string;
};

const NewCategoryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      console.log(data);
      await axios.post("http://localhost:3000/categories", data);
    } catch (error) {
      console.error("An error occured while posting the ad :", error);
    }
  };

  return (
    <div>
      <h2>Ajouter une catégorie</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.name && <span>Le nom est obligatoire </span>}

        <label>Nom</label>
        <br />
        <input
          defaultValue="Immobilier"
          {...register("name", { required: true })}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default NewCategoryForm;
