const fs = require('fs');
let users=[
    {
        name: "Gaurish",
        age: 20,
        address : "Bangalore",
    },
    {
        name: "Gaurav",
        age: 22,
        address : "Bangalore",
    }

]
fs.writeFile('users.txt',JSON.stringify(users),function(err) {
    if (err) return console.error(err);
    console.log('Done');
});