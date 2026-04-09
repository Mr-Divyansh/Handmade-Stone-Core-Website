<?php
header('Content-Type: application/json');
require __DIR__ . '/../vendor/autoload.php';

use Twilio\Rest\Client;

$data = json_decode(file_get_contents('php://input'), true);
$phone = $data['phone'] ?? '';
$otp = rand(100000, 999999);

session_start();
$_SESSION['otp'] = $otp;

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
    // Test mode - log OTP to console/file instead of sending SMS
    error_log("TEST OTP for $phone: $otp");
    echo json_encode(['success' => true, 'test_mode' => true]);
    exit;
}

try {
    $client = new Twilio\Rest\Client($account_sid, $auth_token);
    $client->verify->v2->services($service_sid)->verifications->create(
        '+91' . $phone,
        'sms'
    );
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
?>