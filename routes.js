const express = require('express');
const axios = require('axios');
const cache = require('./cache');
const config = require('./config');
const router = express.Router();

router.get('/holidays', async (req, res) => {
  const { country, year } = req.query;
  
  if (!country || !year) {
    return res.status(400).json({ error: 'Country and year are required' });
  }

  const cacheKey = `holidays_${country}_${year}`;
  const cachedHolidays = cache.get(cacheKey);

  if (cachedHolidays) {
    return res.json(cachedHolidays);
  }

  try {
    const response = await axios.get(`${config.apiUrl}/holidays`, {
      params: {
        api_key: config.apiKey,
        country,
        year,
      },
    });

    const holidays = response.data.response.holidays;

    const responseData = {
        data: holidays
    }

    cache.set(cacheKey, responseData);

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch holidays' });
  }
});

router.get('/countries', async (req, res) => {
  try {
    const response = await axios.get(`${config.apiUrl}/countries`, {
      params: {
        api_key: config.apiKey,
      },
    });

    const cacheKey = `holidays_countries`;
    const cachedHolidays = cache.get(cacheKey);

    if (cachedHolidays) {
        return res.json(cachedHolidays);
    }

    const responseData = {
        data: response.data.response.countries
    }

    cache.set(cacheKey, responseData);

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch countries' });
  }
});

module.exports = router;
