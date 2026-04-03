<?php
// api/delete_product.php — DELETE product by id

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once '../config.php';

$id = intval($_GET['id'] ?? 0);

if (!$id) {
    echo json_encode(['success' => false, 'message' => 'Invalid ID']);
    exit;
}

// Get image path before delete
$res = $conn->query("SELECT image FROM products WHERE id = $id");
$row = $res->fetch_assoc();

if (!$row) {
    echo json_encode(['success' => false, 'message' => 'Product not found']);
    exit;
}

// Delete image file if exists
if ($row['image'] && file_exists('../' . $row['image'])) {
    unlink('../' . $row['image']);
}

$stmt = $conn->prepare("DELETE FROM products WHERE id = ?");
$stmt->bind_param('i', $id);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Product deleted']);
} else {
    echo json_encode(['success' => false, 'message' => $stmt->error]);
}

$stmt->close();
$conn->close();
?>

<script>
const data = new FormData(document.querySelector('#productForm'));
fetch('../Php/AddProduct.php', { method:'POST', body:data })
  .then(r => r.text())
  .then(t => { console.log('RAW:', t); 
                try { console.log('JSON:', JSON.parse(t)); }
                catch(e) { console.error('JSON parse failed', e); } });
</script>