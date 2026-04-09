# StoneCore Website - OTP Setup Guide

## Files Created/Modified

### New Files:
- `otp-verify.html` - OTP verification page
- `api/send-otp.php` - Backend to send OTP via Twilio
- `api/verify-otp.php` - Backend to verify OTP
- `composer.json` - PHP dependencies

### Modified Files:
- `js/checkout.js` - Updated COD flow to redirect to OTP page

## Setup Instructions

### 1. Install PHP Dependencies

First, install Composer if you don't have it:
```bash
# Download and install Composer
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
```

Then install dependencies:
```bash
composer install
```

### 2. Configure Twilio

1. Go to [Twilio Console](https://console.twilio.com/)
2. Get your Account SID, Auth Token, and Phone Number
3. Update `api/send-otp.php` with your credentials:

```php
$account_sid = 'YOUR_TWILIO_ACCOUNT_SID';
$auth_token = 'YOUR_TWILIO_AUTH_TOKEN';
$twilio_from = 'YOUR_TWILIO_PHONE_NUMBER';
```

### 3. Test the Flow

1. Go to checkout page with a product
2. Select "Cash on Delivery"
3. Click "Place Order"
4. You'll be redirected to `otp-verify.html`
5. Enter the OTP (check browser console for test OTP)
6. After verification, you'll be redirected back to complete the order

## How It Works

### COD Flow:
1. User selects COD → Redirects to OTP page
2. OTP page sends SMS via Twilio
3. User enters OTP → Verifies with backend
4. On success → Redirects back to checkout
5. Checkout detects verification → Completes order

### Session Management:
- Phone verification status stored in `sessionStorage`
- OTP stored in PHP session on server
- Verification persists across page redirects

## Test Mode (Without Twilio)

For testing without real SMS, you can temporarily modify `api/send-otp.php` to return success without sending SMS, and log the OTP to console.

## Security Notes

- OTP expires with PHP session (typically 24 minutes)
- Phone verification stored in browser session only
- Consider adding rate limiting for production