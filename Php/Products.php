<?php
// api/products.php — GET all products

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once '../config.php';

$result = $conn->query("SELECT * FROM products ORDER BY created_at DESC");

$products = [];
while ($row = $result->fetch_assoc()) {
    $products[] = $row;
}

echo json_encode([
    'success' => true,
    'products' => $products
]);

$conn->close();
?>