-- ============================================
-- StoneCore Database
-- Import this file in phpMyAdmin
-- ============================================

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

-- ============================================
-- 6 Products — Full Data
-- ============================================
INSERT INTO products (name, category, price, description, image) VALUES

-- Product 1: Handcrafted Miniature Zen Garden Diorama
(
  'Handcrafted Miniature Zen Garden Diorama with Bonsai & Natural Stones',
  'Zen Stack',
  1899.00,
  'Bring peace and natural beauty into your space with this beautifully handcrafted miniature Zen garden. Designed with carefully selected natural stones, detailed bonsai-style trees, and a tiny wooden shrine, this piece captures the essence of a tranquil landscape in a compact form. Each element is thoughtfully arranged to create harmony and balance, making it perfect for home décor, office desks, or as a unique gift. The realistic textures, moss detailing, and layered stone steps add depth and authenticity, giving it a premium artistic feel. Every piece is handmade, ensuring that no two designs are exactly the same — making your miniature garden truly one of a kind.',
  'img/product1/main.jpg'
),

-- Product 2: Harmony Bridge Zen Garden
(
  'Harmony Bridge Zen Garden – Handcrafted Miniature Bonsai Diorama',
  'Bridge Series',
  2299.00,
  'Experience a blend of color, calm, and creativity with this handcrafted miniature Zen garden. This design features a peaceful monk figurine resting beneath a lush bonsai canopy, surrounded by natural stone formations and vibrant moss textures. The highlight of this piece is the beautifully crafted colorful wooden bridge, symbolizing connection and harmony within nature. Paired with layered stone steps and detailed landscaping, the scene creates a serene environment that feels both artistic and meaningful. Carefully arranged elements and realistic textures bring this miniature world to life, making it a perfect décor piece for those who appreciate tranquility and craftsmanship. Each piece is handmade, ensuring every garden is unique and full of character.',
  'img/product2/main.jpg'
),

-- Product 3: Serene Monk Bonsai Garden
(
  'Serene Monk Bonsai Garden – Handcrafted Miniature Zen Diorama',
  'Monk Series',
  2499.00,
  'A serene handcrafted monk bonsai garden with a meditating monk figurine surrounded by natural stones and bonsai branches. This piece beautifully blends the calming essence of Zen philosophy with intricate handcrafted artistry. Featuring layered natural stone formations, realistic moss detailing, and carefully shaped miniature bonsai trees, the scene creates a tranquil landscape full of depth and character. The monk figurine sits peacefully at the center, adding a spiritual and mindful energy to any space. Perfect for home décor, meditation corners, or as a meaningful gift for someone who values calm and craftsmanship. Each unit is individually handmade — no two are exactly alike.',
  'img/product3/main.jpg'
),

-- Product 4: Stone Lantern Bonsai Retreat
(
  'Stone Lantern Bonsai Retreat',
  'Bonsai Collection',
  1999.00,
  'A peaceful stone lantern retreat with miniature bonsai, natural slate stones, and a glowing lantern centerpiece. This handcrafted piece features two bonsai-style trees flanking a detailed miniature red lantern shrine, surrounded by stacked natural river stones and soft moss textures. The tall standing stones create a dramatic backdrop while the layered base adds dimension and depth to the composition. Ideal for home décor, office styling, or as a standout gift for decor enthusiasts. Built with natural materials including river stones, slate, artificial moss, and hand-shaped decorative branches. Every piece is individually handmade — no two are exactly alike.',
  'img/product4/main.jpg'
),

-- Product 5: Whispering Bonsai Sanctuary
(
  'Whispering Bonsai Sanctuary – Miniature Zen Garden with Apple Perch',
  'Bonsai Collection',
  2199.00,
  'Step into a quiet world of nature and imagination with this handcrafted miniature Zen garden. Designed with intricate bonsai-style trees and layered stone elements, this piece captures a serene outdoor sanctuary in a compact artistic form. A unique highlight of this design is the elevated wooden perch holding a symbolic apple, adding a touch of storytelling and visual charm. The natural moss textures and carefully arranged stones create depth and realism, while the delicate tree branches form a peaceful canopy over the scene. Every detail — from the textured rocks to the handcrafted platform — reflects skilled craftsmanship, making this miniature garden a standout décor piece for any space. Each unit is handmade, ensuring that your piece is truly one-of-a-kind.',
  'img/product5/main.jpg'
),

-- Product 6: Whispering Monk Zen Garden
(
  'Whispering Monk Zen Garden',
  'Monk Series',
  1799.00,
  'The Whispering Monk Zen Garden is a one-of-a-kind handmade decor piece inspired by traditional Japanese Zen landscapes. Carefully arranged using layered natural stones, moss details, two handcrafted bonsai-style trees, and a small red shrine, this sculpture creates a miniature world of peace and stillness. At the center of the scene sits a smiling monk figurine dressed in blue, symbolizing calm, joy, and inner balance. A small stone staircase leads toward the shrine, while smooth standing rocks and detailed greenery complete the natural look. Every piece is individually handmade, which means no two gardens are exactly alike. Perfect for decorating living rooms, office desks, meditation corners, shelves, cafes, or gift collections.',
  'img/product6/main.jpg'
);

-- ============================================
-- Verify inserted data
-- ============================================
-- SELECT * FROM products;