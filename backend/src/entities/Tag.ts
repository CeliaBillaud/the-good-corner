import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import Ad from "./Ad";
import { Field, ObjectType } from "type-graphql";

@Entity()
@ObjectType()
class Tag extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column({ nullable: false })
  @Field()
  name: string;

  @ManyToMany(() => Ad, (ad) => ad.tags)
  @Field(() => [Ad])
  ads: Ad[];
}

export default Tag;
