<?php
// api/product.php - Get single product by ID

require_once '../config.php';

$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;

if ($id <= 0) {
    echo json_encode(['success' => false, 'message' => 'Invalid product ID']);
    exit;
}

$sql = "SELECT * FROM products WHERE id = $id";
$result = $conn->query($sql);

if ($result && $result->num_rows > 0) {
    $row = $result->fetch_assoc();
    
    // Parse features and details from JSON if stored as JSON
    $features = isset($row['features']) ? json_decode($row['features'], true) : [];
    $details = isset($row['details']) ? json_decode($row['details'], true) : [];
    
    $product = [
        'id' => (int)$row['id'],
        'name' => $row['name'],
        'category' => $row['category'],
        'price' => (float)$row['price'],
        'original_price' => $row['original_price'] ? (float)$row['original_price'] : null,
        'rating' => (float)$row['rating'],
        'reviews' => (int)$row['reviews'],
        'description' => $row['description'],
        'image' => $row['image'],
        'features' => $features,
        'details' => $details,
        'in_stock' => (bool)$row['in_stock']
    ];
    
    echo json_encode(['success' => true, 'product' => $product]);
} else {
    echo json_encode(['success' => false, 'message' => 'Product not found']);
}

$conn->close();
?>