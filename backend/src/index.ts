import "reflect-metadata";
import express from "express";
import cors from "cors";
import dataSource from "./config/db";
import Ad from "./entities/Ad";
import Category from "./entities/Category";
import Tag from "./entities/Tag";
import { In } from "typeorm";

const app = express();
app.use(express.json());
const port = 3000;

app.use(cors());

app.get("/ads", async (_req, res) => {
  const ads = await Ad.find({
    relations: {
      category: true,
      tags: true,
    },
  }); // Active Record pour récupérer toutes les annonces

  res.send(ads);
});

app.post("/ads", async (req, res) => {
  const ad = new Ad();
  ad.title = req.body.title;
  ad.description = req.body.description;
  ad.author = req.body.author;
  ad.price = req.body.price;
  ad.createdAt = req.body.createdAt;
  ad.pictureUrl = req.body.pictureUrl;
  ad.category = req.body.category;
  ad.tags = req.body.tags;

  //boucler sur les tags
  // ad.tags = await Tag.findBy({id: In(req.body.tags)});
  ad.save();

  res.send(ad);
});

app.delete("/ads/:id", async (req, res) => {
  Ad.delete({ id: parseInt(req.params.id) });
  res.send("deleted");
});

app.put("/ads/:id", async (req, res) => {
  // const ad = await Ad.findOneByOrFail({id : parseInt(req.params.id)});

  // ad.title = req.body.title;
  // ad.description = req.body.description;
  // ad.author = req.body.author;
  // ad.price = req.body.price;
  // ad.createdAt = req.body.date;
  // ad.image = req.body.image;
  // ad.category_id = req.body.category_id;

  // ad.save();

  await Ad.update({ id: parseInt(req.params.id) }, req.body);
  res.send("updated");
});

app.get("/categories", async (_req, res) => {
  const categories = await Category.find({}); // Active Record pour récupérer toutes les annonces
  res.send(categories);
});

app.post("/categories", (req, res) => {
  const category = new Category();
  category.name = req.body.name;

  category.save();

  res.send(category);
});

app.get("/tags", async (_req, res) => {
  const tags = await Tag.find({}); // Active Record pour récupérer toutes les annonces
  res.send(tags);
});

app.post("/tags", (req, res) => {
  const tag = new Tag();
  tag.name = req.body.name;

  tag.save();

  res.send(tag);
});

// once express is started, we can initialize the database
app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  //initialize renvoie une promesse
  await dataSource.initialize();
  const categories = await Category.find({});
  if (categories.length === 0) {
    const category = new Category();
    category.name = "test";
    category.save();
  }
});
