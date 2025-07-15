const fs = require("fs");

fs.writeFile("../demo.txt","g26 hello",function (err) {
  if (err) return console.log (err);
  console.log("File written successfully");
})
fs.writeFile("../demo2.txt","i am demo2 file",function (err) {
  if (err) return console.log (err);
  console.log("File written successfully");
})
 