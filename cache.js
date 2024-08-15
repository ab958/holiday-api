const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: require('./config').cacheTTL });

module.exports = cache;
