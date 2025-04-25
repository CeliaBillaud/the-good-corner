import {
  Arg,
  Field,
  ID,
  InputType,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { In } from "typeorm";
import Ad from "../entities/Ad";
import Category from "../entities/Category";
import Tag from "../entities/Tag";

@InputType()
class CategoryInput {
  @Field()
  name: string;
}

@Resolver(Category)
export class CategoryResolver {
  @Query(() => [Category])
  async getAllCategories() {
    const categories = await Category.find<Category>({
      relations: {
        ads: true,
      },
    });

    return categories;
  }

  @Mutation(() => ID)
  async createCategory(@Arg("data") data: CategoryInput) {
    const category = Category.create({
      ...data,
    });

    try {
      await category.save();
      return category.id;
    } catch (err) {
      console.warn(err);
      throw new Error("Error creating category");
    }
  }
}
