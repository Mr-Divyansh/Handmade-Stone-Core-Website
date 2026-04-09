<?php
header('Content-Type: application/json');
require __DIR__ . '/../vendor/autoload.php';

use Twilio\Rest\Client;

$data = json_decode(file_get_contents('php://input'), true);
$code = $data['otp'] ?? '';
$phone = $data['phone'] ?? '';

$account_sid = getenv('TWILIO_ACCOUNT_SID');
$auth_token = getenv('TWILIO_AUTH_TOKEN');
$service_sid = getenv('TWILIO_SERVICE_SID');

// Validate environment variables are set
if (!$account_sid || !$auth_token || !$service_sid) {
    echo json_encode(['success' => false, 'error' => 'Twilio credentials not configured. Set TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_SERVICE_SID environment variables.']);
    exit;
}

// For testing without Twilio setup
if ($auth_token === 'YOUR_TWILIO_AUTH_TOKEN') {
    // Test mode - check against session
    session_start();
    if ($code == ($_SESSION['otp'] ?? '')) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
    exit;
}

try {
    $client = new Twilio\Rest\Client($account_sid, $auth_token);
    $verification_check = $client->verify->v2->services($service_sid)->verificationChecks->create(
        $code,
        ["to" => '+91' . $phone]
    );
    if ($verification_check->status === 'approved') {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
?>