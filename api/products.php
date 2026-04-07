<?php
// api/products.php - Get all products

require_once '../config.php';

$sql = "SELECT id, name, category, price, original_price, rating, reviews, description, image, in_stock FROM products WHERE in_stock = 1 ORDER BY id ASC";
$result = $conn->query($sql);

$products = [];

if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $products[] = [
            'id' => (int)$row['id'],
            'name' => $row['name'],
            'category' => $row['category'],
            'price' => (float)$row['price'],
            'original_price' => $row['original_price'] ? (float)$row['original_price'] : null,
            'rating' => (float)$row['rating'],
            'reviews' => (int)$row['reviews'],
            'description' => $row['description'],
            'image' => $row['image'],
            'in_stock' => (bool)$row['in_stock']
        ];
    }
    echo json_encode(['success' => true, 'products' => $products]);
} else {
    echo json_encode(['success' => true, 'products' => []]);
}

$conn->close();
?>