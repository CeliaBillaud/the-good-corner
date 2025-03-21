-- PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS ad_tag;
DROP TABLE IF EXISTS ad;
DROP TABLE IF EXISTS tag;
DROP TABLE IF EXISTS category;

CREATE TABLE category (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE tag (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
);

 CREATE TABLE ad (
      id INTEGER PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      author TEXT NOT NULL,
      price REAL NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      city TEXT NOT NULL,
      image TEXT,
      category_id INTEGER NOT NULL
      -- FOREIGN KEY (category_id) REFERENCES category(id)
  );

 CREATE TABLE ad_tag (
     ad_id INTEGER,
     tag_id INTEGER,
     FOREIGN KEY (ad_id) REFERENCES ad(id),
     FOREIGN KEY (tag_id) REFERENCES tag(id)
 );

 INSERT INTO category (id, name) VALUES
     (1, 'Autre'),
     (2, 'Vehicule'),
     (3, 'Hifi');

INSERT INTO tag (id, name) VALUES
    (1, 'neuf'),
    (2, 'soldé');

INSERT INTO ad (id, title, description, author, price, created_at, city, image, category_id) VALUES
    (1, 'Vélo à vendre', 'Vélo en bon état, peu servi', 'john.doe@gmail.com', 150, '2024-03-19', 'Paris', NULL, 2),
    (2, 'Voiture d''occasion', 'Voiture très bien entretenue', 'jane.smith@gmail.com', 5000, '2024-03-18', 'Lyon', 'https://example.com/image1.jpg', 2),
    (3, 'Stylo plume', 'Stylo plume Parker, encre bleue', 'writer.seller@gmail.com', 15, '2024-09-01', 'Bordeaux', NULL, 1),
    (4, 'Chaise pliante', 'Chaise pliante pratique pour camping', 'camping.seller@gmail.com', 30, '2024-09-01', 'Paris', NULL, 1),
    (5, 'Lampe de chevet', 'Lampe LED moderne, plusieurs couleurs', 'home.seller@gmail.com', 35, '2024-09-01 18:45:00', 'Lyon', NULL, 1),
    (6, 'Table en bois massif', 'Table en chêne, très solide', 'woodworker@gmail.com', 200, '2024-03-14 11:20:00', 'Bordeaux', NULL, 1),
    (7,'Smartphone Android', 'Samsung Galaxy S21, très bon état', 'phone.seller@gmail.com', 500, '2024-03-13 16:00:00', 'Paris', 'https://example.com/image3.jpg', 3),
    (8, 'Montre connectée', 'Apple Watch Series 7, fonctionne parfaitement', 'watch.seller@gmail.com', 250, '2024-03-12 08:45:00', 'Lyon', NULL, 3),
    (9, 'Console de jeux', 'PlayStation 5, avec deux manettes', 'gamer@gmail.com', 450, '2024-03-11 20:30:00', 'Bordeaux', 'https://example.com/image4.jpg', 3),
    (10, 'Paquet de stylos', 'Lot de 10 stylos Bic', 'office.seller@gmail.com', 5, '2024-02-10 13:10:00', 'Paris', NULL, 1),
    (11, 'Câble USB-C', 'Chargeur rapide USB-C 2m', 'tech.seller@gmail.com', 12, '2024-02-15 17:25:00', 'Lyon', NULL, 3),
    (12, 'Sac à dos', 'Sac à dos 20L, idéal pour la randonnée', 'sport.seller@gmail.com', 35, '2024-02-20 15:40:00', 'Bordeaux', NULL, 1),
    (13, 'Aspirateur robot', 'Roomba i7, fonctionne très bien', 'clean.seller@gmail.com', 300, '2024-03-08 10:10:00', 'Bordeaux', NULL, 3),
    (14, 'Machine à café', 'Nespresso Vertuo, avec capsules offertes', 'coffee.seller@gmail.com', 120, '2024-03-06 09:30:00', 'Lyon', NULL, 1),
    (15, 'VTT tout terrain', 'Vélo de montagne avec suspensions', 'bike.seller@gmail.com', 400, '2024-03-05 07:50:00', 'Bordeaux', NULL, 2),
    (16, 'Clé USB 64Go', 'Clé USB Kingston 64Go neuve', 'data.seller@gmail.com', 20, '2024-09-02 12:30:00', 'Paris', NULL, 3),
    (17, 'Cahier de notes', 'Cahier A4 200 pages, lignage classique', 'student.seller@gmail.com', 10, '2024-09-03 08:00:00', 'Lyon', NULL, 1),
    (18, 'Tapis de course', 'Tapis pliable, idéal pour la maison', 'fitness.seller@gmail.com', 600, '2024-03-01 18:20:00', 'Paris', NULL, 2),
    (19, 'Barbecue à gaz', 'Barbecue Weber, idéal pour l''été', 'bbq.seller@gmail.com', 250, '2024-02-28 14:45:00', 'Lyon', 'https://example.com/image7.jpg', 1),
    (20, 'Trousse scolaire', 'Trousse avec 5 stylos et règle', 'school.seller@gmail.com', 8, '2024-09-02 11:10:00', 'Bordeaux', NULL, 1);

INSERT INTO ad_tag (ad_id, tag_id) VALUES
    (1, 1), 
    (2, 1),
    (2, 2),
    (3, 2), 
    (4, 1),
    (4, 2), 
    (5, 1); 

-- -- SELECT * FROM tag;
-- -- SELECT * FROM ad INNER JOIN category ON ad.category_id = category.id;

-- -- SELECT ad.title, tag.name 
-- -- FROM ad 
-- -- INNER JOIN ad_tag ON ad.id = ad_tag.tag_id
-- -- INNER JOIN tag ON ad_tag.tag_id = tag.id;

-- -- SELECT * FROM ad INNERJOIN tag ON ad.tag_id = tag;

-- -- SELECT * FROM ad WHERE city = "Bordeaux";

-- -- DELETE FROM ad WHERE price > 40;
-- -- SELECT * FROM ad;

-- -- UPDATE ad SET price = 0 WHERE created_at = '2024-09-01';
-- -- SELECT * FROM ad;

-- -- SELECT AVG(price) FROM ad WHERE city="Paris";

-- -- SELECT city, AVG(price) FROM ad GROUP BY city;

