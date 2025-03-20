import express from "express";
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('good_corner.sqlite');

const app = express();
app.use(express.json());
const port = 3000;

app.get("/ads", (_req, res) => {
  db.all("SELECT * FROM ad", (err,rows) => {
    if(err) {
      console.error(err);
      res.status(500).send("An error occurred");
    } else {
      res.send(rows);
    }
  })
})

app.post("/ads", (req, res) => {
  const {title, description, author, price, city, image} = req.body;
  const stmt = db.prepare(
    "INSERT INTO ad (title, description, author, price, city, image) VALUES(?, ?, ?, ?, ?, ?)"
  );
  stmt.run([title, description, author, price, city, image], 
    (err) => { 
    if (err) {
      console.error(err);
      return res.status(500).send("An error occurred");
    }
    res.status(201).send("ad has been created");
  }
);
})

app.delete("/ads/:id", (req, res) => {
  const stmt = db.prepare(
    "DELETE FROM ad WHERE id = ?"
  );
  stmt.run(req.params.id, 
    function (err) {  
      if (err) {
        console.error(err);
        return res.status(500).send("An error occurred");
      }
      res.status(200).send('deleted');
    }
  );
})

app.put("/ads/:id", (req, res) => {
  const stmt = db.prepare(
    "UPDATE ad SET title = ?, description = ?, author = ?, price = ?, city = ?, image = ? WHERE id = ?"
  );
  stmt.run([
    req.body.title,
    req.body.description,
    req.body.author,
    req.body.price,
    req.body.city,
    req.body.image, 
    req.params.id
  ],
    (err) => { 
      if (err) {
        console.error(err);
        return res.status(500).send("An error occurred");
      }
      res.status(200).send('updated');
    }
    );

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
