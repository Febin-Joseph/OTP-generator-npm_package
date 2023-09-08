function OTPexpiration(expiration) {
    if (typeof expiration === 'number') {
      return Date.now() + expiration * 1000; // Treat as seconds if it's a number
    }
  
    if (typeof expiration === 'string') {
      const regex = /^(\d+)([smh])$/;
      const match = expiration.match(regex);
  
      if (match) {
        const value = parseInt(match[1]);
        const unit = match[2];
  
        switch (unit) {
          case 's':
            return Date.now() + value * 1000; // seconds
          case 'm':
            return Date.now() + value * 60 * 1000; // minutes
          case 'h':
            return Date.now() + value * 60 * 60 * 1000; // hours
        }
      }
    }
  
    throw new Error('Invalid expiration format. Use a number of seconds or a format like "1m" for 1 minute.');
  }
  
module.exports = OTPexpiration;