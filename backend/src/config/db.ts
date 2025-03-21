import "reflect-metadata";
import { DataSource } from "typeorm";
import Ad from "../entities/Ad";

const dataSource = new DataSource({
    type: "sqlite",
    database: "src/good_corner.sqlite",
    entities: [Ad],
    synchronize: true,
    logging: ["error", "query"]
});

export default dataSource;