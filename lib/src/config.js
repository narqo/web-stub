var path = require('path'),
    configsPath = path.resolve(__dirname, '../../configs/current') + '/';

exports.get = function(name) {
    return require(configsPath + name);
};
