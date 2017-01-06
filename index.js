const cheerio = require('cheerio'),
    config = require('./config/config'),
    getReq = require('./utils/getReq'),
    logger = require('./utils/logger'),
    scrape = require('./scripts/scrape');

getReq(config.url)
    .then(res => cheerio.load(res.body))
    .then(scrape)
    .then(result => {
        console.log(result);
    })
    .catch(logger('error'));
