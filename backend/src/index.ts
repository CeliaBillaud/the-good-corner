import "reflect-metadata";

import dataSource from "./config/db";
import Ad from "./entities/Ad";
import Category from "./entities/Category";
import Tag from "./entities/Tag";
import { FindOptionsWhere, Like } from "typeorm";
import { buildSchema } from "type-graphql";
import { AdResolver } from "./resolvers/AdResolver";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { CategoryResolver } from "./resolvers/CategoryResolver";
import TagResolver from "./resolvers/TagResolver";
const port = 3000;

async function startServer() {
  await dataSource.initialize();
  const schema = await buildSchema({
    resolvers: [AdResolver, CategoryResolver, TagResolver],
  });
  const apolloServer = new ApolloServer({ schema: schema });
  const { url } = await startStandaloneServer(apolloServer, {
    listen: { port },
  });
  console.info("Server started on " + url);
}

startServer();
