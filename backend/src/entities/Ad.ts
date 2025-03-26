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

@Entity()
class Ad extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  author: string;

  @Column()
  price: number;

  // @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  @CreateDateColumn()
  createdAt: string;

  @Column()
  pictureUrl: string;

  @ManyToOne(() => Category, (category) => category.ads)
  category: Category;

  @ManyToMany(() => Tag, (tag) => tag.ads)
  @JoinTable()
  tags: Tag[];
}

export default Ad;
