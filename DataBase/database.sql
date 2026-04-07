-- Create Database
CREATE DATABASE IF NOT EXISTS stonecore_db;
USE stonecore_db;

-- Create products table
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `name_em` varchar(255) DEFAULT NULL,
  `category` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `original_price` decimal(10,2) DEFAULT NULL,
  `rating` decimal(2,1) DEFAULT '4.5',
  `reviews` int(11) DEFAULT '0',
  `description` text,
  `features` text,
  `details` text,
  `image` varchar(500) NOT NULL,
  `images` text,
  `in_stock` tinyint(1) DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Insert Products
INSERT INTO `products` (`id`, `name`, `name_em`, `category`, `price`, `original_price`, `rating`, `reviews`, `description`, `features`, `details`, `image`, `in_stock`) VALUES
(1, 'Handcrafted Miniature Zen Garden Diorama', 'Zen Garden <em>Diorama</em>', 'Zen Stack', 1899, 2499, 4.8, 127, 'Bring peace and natural beauty into your space with this beautifully handcrafted miniature Zen garden. Designed with carefully selected natural stones, detailed bonsai-style trees, and a tiny wooden shrine, this piece captures the essence of a tranquil landscape in a compact form.', '[\"Handcrafted with attention to detail\",\"Natural river stones and textured elements\",\"Miniature bonsai-style trees — realistic finish\",\"Decorative wooden shrine centerpiece\",\"Matte natural texture — premium look\",\"Ideal for modern interiors and gifting\"]', '{\"Material\":\"Natural stones, resin, artificial bonsai\",\"Size\":\"Approx. 15–25 cm\",\"Finish\":\"Matte natural texture\",\"Color Theme\":\"Earth tones — green, gray, beige\",\"Weight\":\"Lightweight\",\"Customizable\":\"Yes, on request\"}', 'Product/Handcrafted Miniature Zen Garden Diorama with Bonsai & Natural Stones/Handcrafted Miniature Zen Garden Diorama with Bonsai & Natural Stones 1.png', 1),

(2, 'Harmony Bridge Zen Garden', 'Harmony Bridge <em>Zen Garden</em>', 'Bridge Series', 2299, 2999, 4.6, 89, 'Experience a blend of color, calm, and creativity with this handcrafted miniature Zen garden. The highlight is a beautifully crafted colorful wooden bridge, symbolizing connection and harmony within nature.', '[\"Built with precision and care\",\"Peaceful monk figurine — calm and mindfulness\",\"Colorful wooden bridge — unique artistic highlight\",\"Dense bonsai trees — natural and realistic\",\"Layered stone details — adds depth and structure\",\"Perfect for modern décor and gifting\"]', '{\"Material\":\"Natural stones, resin, bonsai, wood\",\"Size\":\"Approx. 18–30 cm\",\"Finish\":\"Matte natural texture\",\"Color Theme\":\"Earth tones with vibrant bridge accents\",\"Weight\":\"Lightweight yet stable\",\"Customizable\":\"Yes, color theme on request\"}', 'Product/Harmony Bridge Zen Garden – Handcrafted Miniature Bonsai Diorama/Harmony Bridge Zen Garden – Handcrafted Miniature Bonsai Diorama 1.png', 1),

(3, 'Serene Monk Bonsai Garden', 'Serene Monk <em>Bonsai Garden</em>', 'Monk Series', 2499, 3199, 4.9, 203, 'A serene handcrafted monk bonsai garden with a meditating monk figurine surrounded by natural stones and bonsai branches. Featuring layered natural stone formations, realistic moss detailing, and carefully shaped miniature bonsai trees.', '[\"Meditating monk figurine at center\",\"Realistic moss and stone formations\",\"Carefully shaped miniature bonsai trees\",\"Spiritual and mindful energy\",\"Perfect for meditation corners\",\"Each unit individually handmade\"]', '{\"Material\":\"Natural stones, resin, bonsai, monk figurine\",\"Size\":\"Approx. 15–25 cm\",\"Finish\":\"Matte natural texture\",\"Color Theme\":\"Earth tones — dark stone, green moss\",\"Weight\":\"Lightweight\",\"Customizable\":\"Yes, on request\"}', 'Product/Serene Monk Bonsai Garden – Handcrafted Miniature Zen Diorama/Serene Monk Bonsai Garden – Handcrafted Miniature Zen Diorama 1.png', 1),

(4, 'Stone Lantern Bonsai Retreat', 'Stone Lantern <em>Bonsai Retreat</em>', 'Bonsai Collection', 1999, 2599, 4.7, 156, 'A peaceful stone lantern retreat with miniature bonsai, natural slate stones, and a glowing lantern centerpiece. Two bonsai-style trees flank a detailed miniature red lantern shrine.', '[\"Twin bonsai trees flanking a red lantern shrine\",\"Stacked natural river stones\",\"Tall standing stones — dramatic backdrop\",\"Soft moss textures throughout\",\"Layered base for depth and dimension\",\"Built with natural materials throughout\"]', '{\"Material\":\"River stones, slate, artificial moss, bonsai branches\",\"Size\":\"Approx. 18–28 cm\",\"Finish\":\"Matte natural texture\",\"Color Theme\":\"Dark stone, red lantern accents, green moss\",\"Weight\":\"Lightweight\",\"Customizable\":\"Yes, on request\"}', 'Product/Stone Lantern Bonsai Retreat/Stone Lantern Bonsai Retreat 1.png', 1),

(5, 'Whispering Bonsai Sanctuary', 'Whispering Bonsai <em>Sanctuary</em>', 'Bonsai Collection', 2199, 2799, 4.8, 98, 'Step into a quiet world of nature and imagination with this handcrafted miniature Zen garden. A unique highlight is the elevated wooden perch holding a symbolic apple.', '[\"Intricate bonsai-style trees\",\"Unique apple perch — storytelling element\",\"Layered natural stone base\",\"Natural moss textures — depth and realism\",\"Handcrafted wooden platform\",\"Truly one-of-a-kind design\"]', '{\"Material\":\"Natural stones, resin, bonsai, wood\",\"Size\":\"Approx. 15–25 cm\",\"Finish\":\"Matte natural look\",\"Color Theme\":\"Dark stone tones, green moss, earthy accents\",\"Weight\":\"Lightweight and durable\",\"Customizable\":\"Yes, on request\"}', 'Product/Whispering Bonsai Sanctuary – Miniature Zen Garden with Apple Perch/Whispering Bonsai Sanctuary – Miniature Zen Garden with Apple Perch 1.png', 1),

(6, 'Whispering Monk Zen Garden', 'Whispering Monk <em>Zen Garden</em>', 'Monk Series', 1799, 2299, 4.5, 67, 'A one-of-a-kind handmade decor piece inspired by traditional Japanese Zen landscapes. Carefully arranged using layered natural stones, moss details, two handcrafted bonsai-style trees, and a small red shrine.', '[\"Smiling monk figurine in blue — joy and balance\",\"Two handcrafted bonsai-style trees\",\"Small red shrine centerpiece\",\"Layered stone staircase detail\",\"Natural river stones and moss\",\"Every piece slightly different — truly handmade\"]', '{\"Material\":\"River stones, slate base, artificial moss, wood shrine\",\"Size\":\"Approx. 10–12 inches wide\",\"Finish\":\"Matte natural texture\",\"Color Theme\":\"Earth tones, red shrine, green bonsai\",\"Weight\":\"Lightweight\",\"Customizable\":\"Yes, on request\"}', 'Product/Whispering Monk Zen Garden/Whispering Monk Zen Garden1.png', 1);