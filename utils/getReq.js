const request = require('request');

module.exports = function getReq(url) {
    return new Promise((resolve, reject) => {
        if (typeof url !== 'string') {
            return reject('Invalid url');
        }

        request(url, (err, res, body) => {
            if (err) {
                reject(err);
            }
            else {
                resolve({res, body});
            }
        });
    });
}
