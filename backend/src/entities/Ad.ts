import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

import Category from "./Category";
import Tag from "./Tag";
import { JoinAttribute } from "typeorm/query-builder/JoinAttribute";
import { Field, ObjectType } from "type-graphql";

@Entity()
@ObjectType()
export default class Ad extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  author: string;

  @Column()
  @Field()
  price: number;

  @CreateDateColumn()
  @Field()
  createdAt: string;

  @Column()
  @Field()
  pictureUrl: string;

  @ManyToOne(() => Category, (category) => category.ads)
  @Field(() => Category)
  category: Category;

  @ManyToMany(() => Tag, (tag) => tag.ads)
  @JoinTable()
  @Field(() => [Tag])
  tags: Tag[];
}
