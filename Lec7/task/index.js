const fs = require('fs');
let users = [
    {
        name: "Yashpal",
        age: 20,
        address : "Bangalore",
    },
    {
        name: "Vansh",
        age: 22,
        address : "Bangalore",
    }
]
fs.writeFile('../users1.txt',JSON.stringify(users),function(err) {
    if (err) return console.error(err);
    console.log('Done');
});