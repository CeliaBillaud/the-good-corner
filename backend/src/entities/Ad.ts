import{
    BaseEntity,
    Column, Entity,  
    JoinTable,  
    ManyToMany,  
    ManyToOne,  
    PrimaryGeneratedColumn
} from "typeorm";

import Category from "./Category";
import Tag from "./Tag";
import { JoinAttribute } from "typeorm/query-builder/JoinAttribute";

@Entity()
class Ad extends BaseEntity{
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
    @Column()
    createdAt: string;

    @Column()
    image : string;

    @ManyToOne(() => Category, category => category.ads, {eager: true})
    category: Category;

    @ManyToMany(() => Tag, tag => tag.ads, {eager: true})
    @JoinTable()
    tags: Tag[];
}

export default Ad;
