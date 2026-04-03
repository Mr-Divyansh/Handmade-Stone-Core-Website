<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

require_once 'Config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Only POST allowed']);
    exit;
}

$name        = trim($_POST['name'] ?? '');
$category    = trim($_POST['category'] ?? '');
$price       = floatval($_POST['price'] ?? 0);
$description = trim($_POST['description'] ?? '');
$image       = '';

if (!$name || !$category || !$price) {
    echo json_encode(['success' => false, 'message' => 'Name, category and price required']);
    exit;
}

if (!empty($_FILES['image']['name'])) {
    $allowed = ['jpg', 'jpeg', 'png', 'webp'];
    $ext     = strtolower(pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION));

    if (!in_array($ext, $allowed)) {
        echo json_encode(['success' => false, 'message' => 'Only jpg, jpeg, png, webp allowed']);
        exit;
    }

    $filename = 'img/' . uniqid('prod_') . '.' . $ext;
    $uploadDir = '../img/';

    if (!is_dir($uploadDir)) mkdir($uploadDir, 0755, true);

    if (!move_uploaded_file($_FILES['image']['tmp_name'], '../' . $filename)) {
        echo json_encode(['success' => false, 'message' => 'Image upload failed']);
        exit;
    }

    $image = $filename;
}

// Insert
$stmt = $conn->prepare(
    "INSERT INTO products (name, category, price, description, image) VALUES (?, ?, ?, ?, ?)"
);
$stmt->bind_param('ssdss', $name, $category, $price, $description, $image);

if ($stmt->execute()) {
    echo json_encode([
        'success' => true,
        'message' => 'Product added successfully',
        'id'      => $stmt->insert_id
    ]);
} else {
    echo json_encode(['success' => false, 'message' => 'DB error: ' . $stmt->error]);
}

$stmt->close();
$conn->close();
?>