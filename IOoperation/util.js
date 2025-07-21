const fs = require('fs');
function read(filepath){
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, 'utf8', (err, data) => {
            if (err) return reject(err);
            //console.log(data[0]);
            let users =JSON.parse(data);
            resolve(users);
        });
    });
}
function write(filepath, data){
    
    module.exports.read=read;
}
