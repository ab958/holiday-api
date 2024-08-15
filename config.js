require('dotenv').config();

const config = {
  apiKey: process.env.CALENDARIFIC_API_KEY,
  apiUrl: 'https://calendarific.com/api/v2',
  cacheTTL: 60 * 60 * 24, // Cache for 24 hours
};

module.exports = config;
