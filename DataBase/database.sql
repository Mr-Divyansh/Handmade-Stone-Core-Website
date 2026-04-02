CREATE DATABASE IF NOT EXISTS stonecore_db;
USE stonecore_db;

CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  description TEXT,
  image VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (name, category, price, description, image) VALUES
('Layered River Stone', 'Zen Stack', 1499.00, 'Handcrafted stacked river stones with natural moss.', 'img/Image1.png'),
('Mini Red Temple', 'Shrine Garden', 1899.00, 'Miniature red Japanese shrine with stone base.', 'img/Image2.png'),
('Meditating Monk Garden', 'Monk Series', 2299.00, 'Child monk meditating under a bonsai tree.', 'img/Image3.png'),
('Twin Bonsai Stone Garden', 'Bonsai Collection', 1699.00, 'Two bonsai trees on layered slate rock.', 'img/Image4.png'),
('Stone Bridge Temple', 'Bridge Series', 2099.00, 'Two stone platforms connected by a rock bridge.', 'img/Image1.png'),
('Floating Rock Platform', 'Premium Set', 2499.00, 'Unique floating stone layers with miniature shrine.', 'img/Image2.png');