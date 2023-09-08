const OTPexpiration = require('./expTime')

function generateOTP({
  length = 6,
  digits = true,
  letters = false,
  symbols = false,
  expiration = 0,
} = {}) {
  if (length <= 0) {
    throw new Error('OTP length must be greater than 0.');
  }

  let charset = '';
  if (digits) charset += '0123456789';
  if (letters) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  if (symbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

  if (!charset) {
    throw new Error('At least one character type (digits, letters, symbols) must be selected.');
  }

  let otp = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    otp += charset[randomIndex];
  }

  if (expiration) {
    const expirationTimestamp = OTPexpiration(expiration);
    return { otp, expiresAt: new Date(expirationTimestamp) };
  }

  return otp;
}

module.exports = generateOTP