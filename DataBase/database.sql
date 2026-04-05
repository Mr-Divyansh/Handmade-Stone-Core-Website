-- StoneCore Database
-- Import this file in phpMyAdmin

CREATE DATABASE IF NOT EXISTS stonecore_db;
USE stonecore_db;

-- Products Table
CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  description TEXT,
  image VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Clear old data
TRUNCATE TABLE products;

-- Actual 6 Products
INSERT INTO products (name, category, price, description, image) VALUES
(
  'Handcrafted Miniature Zen Garden Diorama',
  'Zen Stack',
  1899.00,
  'A beautifully handcrafted miniature Zen garden diorama featuring natural stones, moss, and bonsai — perfect for desk or shelf decor.',
  'img/product1/main.jpg'
),
(
  'Harmony Bridge Zen Garden',
  'Bridge Series',
  2299.00,
  'A handcrafted stone bridge garden with natural river stones, miniature shrine, and lush green moss. Brings harmony to any space.',
  'img/product2/main.jpg'
),
(
  'Serene Monk Bonsai Garden',
  'Monk Series',
  2499.00,
  'A serene handcrafted monk bonsai garden with a meditating monk figurine surrounded by natural stones and bonsai branches.',
  'img/product3/main.jpg'
),
(
  'Stone Lantern Bonsai Retreat',
  'Bonsai Collection',
  1999.00,
  'A peaceful stone lantern retreat with miniature bonsai, natural slate stones, and a glowing lantern centerpiece.',
  'img/product4/main.jpg'
),
(
  'Whispering Bonsai Sanctuary',
  'Bonsai Collection',
  2199.00,
  'A miniature bonsai sanctuary with whispering bamboo-style trees, stacked stones, and delicate moss arrangements.',
  'img/product5/main.jpg'
),
(
  'Whispering Monk Zen Garden',
  'Monk Series',
  1799.00,
  'A handcrafted Zen garden featuring a whispering monk figurine, natural river stones, and miniature bonsai in perfect balance.',
  'img/product6/main.jpg'
);