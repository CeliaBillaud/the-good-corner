import "reflect-metadata";
import express from "express";
import dataSource from "./config/db";
import Ad from "./entities/Ad";

const app = express();
app.use(express.json());
const port = 3000;

app.get("/ads", async (_req, res) => {
  const ads = await Ad.find();  // Active Record pour récupérer toutes les annonces
  res.send(ads);
});


app.post("/ads", (req, res) => {
  const ad = new Ad();
  ad.title = req.body.title;
  ad.description = req.body.description;
  ad.author = req.body.author;
  ad.price = req.body.price;
  ad.createdAt = req.body.createdAt;
  ad.image = req.body.image;
  ad.category_id = req.body.category_id;

  ad.save();

  res.send(ad);
});

app.delete("/ads/:id", async (req, res) => {
  Ad.delete({id: parseInt(req.params.id)});
  res.send('deleted');
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

  await Ad.update({id: parseInt(req.params.id)}, req.body);
  res.send('updated');
});

// once express is started, we can initialize the database
app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  //initialize renvoie une promesse
  await dataSource.initialize();
});
