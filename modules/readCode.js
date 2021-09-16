const fs = require('fs');

module.exports = (filePath) => {
    const data = fs.readFileSync(filePath,{encoding:'utf8', flag:'r'});
    return data;
}