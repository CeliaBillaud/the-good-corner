DROP TABLE IF EXISTS ad;

CREATE TABLE ad (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    author TEXT NOT NULL,
    price REAL NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    city TEXT NOT NULL,
    image TEXT
);

INSERT INTO ad (title, description, author, price, created_at, city, image) VALUES
    ('Vélo à vendre', 'Vélo en bon état, peu servi', 'john.doe@gmail.com', 150, '2024-03-19', 'Paris', NULL),
    ('Voiture d''occasion', 'Voiture très bien entretenue', 'jane.smith@gmail.com', 5000, '2024-03-18', 'Lyon', 'https://example.com/image1.jpg'),
    ('Stylo plume', 'Stylo plume Parker, encre bleue', 'writer.seller@gmail.com', 15, '2024-09-01', 'Bordeaux', NULL),
    ('Chaise pliante', 'Chaise pliante pratique pour camping', 'camping.seller@gmail.com', 30, '2024-09-01', 'Paris', NULL),
    ('Lampe de chevet', 'Lampe LED moderne, plusieurs couleurs', 'home.seller@gmail.com', 35, '2024-09-01 18:45:00', 'Lyon', NULL),
    ('Table en bois massif', 'Table en chêne, très solide', 'woodworker@gmail.com', 200, '2024-03-14 11:20:00', 'Bordeaux', NULL),
    ('Smartphone Android', 'Samsung Galaxy S21, très bon état', 'phone.seller@gmail.com', 500, '2024-03-13 16:00:00', 'Paris', 'https://example.com/image3.jpg'),
    ('Montre connectée', 'Apple Watch Series 7, fonctionne parfaitement', 'watch.seller@gmail.com', 250, '2024-03-12 08:45:00', 'Lyon', NULL),
    ('Console de jeux', 'PlayStation 5, avec deux manettes', 'gamer@gmail.com', 450, '2024-03-11 20:30:00', 'Bordeaux', 'https://example.com/image4.jpg'),
    ('Paquet de stylos', 'Lot de 10 stylos Bic', 'office.seller@gmail.com', 5, '2024-02-10 13:10:00', 'Paris', NULL),
    ('Câble USB-C', 'Chargeur rapide USB-C 2m', 'tech.seller@gmail.com', 12, '2024-02-15 17:25:00', 'Lyon', NULL),
    ('Sac à dos', 'Sac à dos 20L, idéal pour la randonnée', 'sport.seller@gmail.com', 35, '2024-02-20 15:40:00', 'Bordeaux', NULL),
    ('Aspirateur robot', 'Roomba i7, fonctionne très bien', 'clean.seller@gmail.com', 300, '2024-03-08 10:10:00', 'Bordeaux', NULL),
    ('Machine à café', 'Nespresso Vertuo, avec capsules offertes', 'coffee.seller@gmail.com', 120, '2024-03-06 09:30:00', 'Lyon', NULL),
    ('VTT tout terrain', 'Vélo de montagne avec suspensions', 'bike.seller@gmail.com', 400, '2024-03-05 07:50:00', 'Bordeaux', NULL),
    ('Clé USB 64Go', 'Clé USB Kingston 64Go neuve', 'data.seller@gmail.com', 20, '2024-09-02 12:30:00', 'Paris', NULL),
    ('Cahier de notes', 'Cahier A4 200 pages, lignage classique', 'student.seller@gmail.com', 10, '2024-09-03 08:00:00', 'Lyon', NULL),
    ('Tapis de course', 'Tapis pliable, idéal pour la maison', 'fitness.seller@gmail.com', 600, '2024-03-01 18:20:00', 'Paris', NULL),
    ('Barbecue à gaz', 'Barbecue Weber, idéal pour l''été', 'bbq.seller@gmail.com', 250, '2024-02-28 14:45:00', 'Lyon', 'https://example.com/image7.jpg'),
    ('Trousse scolaire', 'Trousse avec 5 stylos et règle', 'school.seller@gmail.com', 8, '2024-09-02 11:10:00', 'Bordeaux', NULL);

SELECT * FROM ad;

-- SELECT * FROM ad WHERE city = "Bordeaux";

-- DELETE FROM ad WHERE price > 40;
-- SELECT * FROM ad;

-- UPDATE ad SET price = 0 WHERE created_at = '2024-09-01';
-- SELECT * FROM ad;

-- SELECT AVG(price) FROM ad WHERE city="Paris";

-- SELECT city, AVG(price) FROM ad GROUP BY city;

