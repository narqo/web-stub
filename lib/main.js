var http = require('http'),
    appConfig = require('web-stub/src/config'),
    config = appConfig.get('node');

function handleRequest(req, res) {
    res.statusCode = 200;
    res.end('Done!');
}

module.exports = function main() {
    http.createServer(handleRequest).listen(config.port);
};
