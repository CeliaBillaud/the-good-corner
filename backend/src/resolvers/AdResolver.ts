import {
  Arg,
  Field,
  ID,
  InputType,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import Ad from "../entities/Ad";
import { Admin, In } from "typeorm";
import Category from "../entities/Category";
import Tag from "../entities/Tag";

@InputType()
class AdInput {
  @Field()
  title: string; // TODO make it required with "!" ?

  @Field()
  description: string;

  @Field()
  author: string;

  @Field()
  price: number;

  @Field()
  pictureUrl: string;

  @Field(() => ID)
  category: Category;

  @Field(() => [ID])
  tags: Tag[];
}

@Resolver(Ad)
export class AdResolver {
  @Query(() => [Ad])
  async getAllAds() {
    const ads = await Ad.find<Ad>({
      //research
      // where: req.query.title
      //   ? {
      //       title: Like(`%${req.query.title.toString()}%`),
      //     }
      //   : {},
      relations: {
        category: true,
        tags: true,
      },
    });

    return ads;
  }

  @Query(() => Ad)
  async getAdById(@Arg("id") id: string) {
    const ad = await Ad.findOne({
      where: { id: parseInt(id) },
      relations: {
        category: true,
        tags: true,
      },
    });

    return ad;
  }

  @Mutation(() => ID)
  async createAd(@Arg("data") data: AdInput) {
    const ad = Ad.create({
      ...data,
      tags: await Tag.find({ where: { id: In(data.tags) } }),
    });

    try {
      await ad.save();
      return ad.id;
    } catch (err) {
      console.warn(err);
      return ad; //TODO Make something more sensible
    }
  }

  @Mutation(() => ID)
  async updateAd(@Arg("id") id: number, @Arg("data") data: AdInput) {
    //const ad = await Ad.findOneBy({ id });
    Ad.update({ id }, data);
    return id;
  }
}
