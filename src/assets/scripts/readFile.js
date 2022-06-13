const fs = require('fs');

//const codeExamplePath = path.join(__dirname, "codeExample.js" )
//export const codeText = fs.readFile(codeExamplePath, {encoding: 'utf-8'});

module.exports = {
    parseFile: function(file_path, callback) {
        fs.readFile(file_path.toString(), 'utf-8', function(err, data) {
            if (err) return callback(err);
            callback(null, data);
        });
    }
}

exports.parseFile = function(file_path, callback) {
    fs.readFile(file_path.toString(), 'utf-8', callback);
}