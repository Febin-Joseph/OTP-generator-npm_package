const generateOTP = require("./otp-generator");

const otp = generateOTP({
    length: 0,
    digits: true,
    letters: false,
    symbols: false,
    expiration: '1m',
});

console.log('OTP :', otp);