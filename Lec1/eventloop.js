const fs =require("fs");
const { resolve } = require('path');
console.log("start");
setTimeout(()=>{
    console.log("timer callback")
},0)
setImmediate(()=>{
    console.log("set immediate callback")
})

function dosometask(){
    return new Promise((resolve,reject)=>{
        resolve("promise chia");
    })
}

fs.readFile("demo.txt",(data)=>{
    console.log("poll phase callback");
    setTimeout(()=>{
        console.log("timer 2")
    },0)
    setImmediate(()=>{
        console.log("immd 2")
    })
})
console.log("End");
dosometask().then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
process.nextTick(()=>{
    console.log("next tick");
})
