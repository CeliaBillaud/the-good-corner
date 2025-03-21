import{
    BaseEntity,
    Column, Entity,  
    PrimaryGeneratedColumn
} from "typeorm";

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

    @Column()
    category_id: number;
}

export default Ad;
