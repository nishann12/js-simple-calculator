const fs = require('fs')
let count=0
const prompt = msg => {
    fs.writeSync(1, String(msg));
    let s = '', buf = Buffer.alloc(1),i=0,numberOfNewLine=0,stdinBuffer = Buffer.alloc(1),inc=0;
    buf.fill(0);
    while ((buf[0] - 10 && buf[0] - 13)) {
       
        s += buf, fs.readSync(0, buf, 0, 1, 0);
        if(buf[0] - 10===0 || buf[0] - 13===0){
            i++;
            // console.log('first',i)
        }
    }
    fs.readSync(0,stdinBuffer,0,1,null);
    count++;
    return s.slice(1).replace(/^\n/, '');
};
let a = Number(prompt("enter your first num:"));
let c = Number(prompt(" enter your second num:"));
console.log("1. for Addition \n2. for Substraction \n3. for multiplication \n4.for division")
let b = (prompt("operation :"));

let result;
if (b ==="1"){
    result = a+c;
}else if (b === "2") {
    result = a-c;
}else if (b ==="3") {
    result = a*c;
}else if (b==="4") {
    result = a/c;
}else {
    result ="enter a valid number"
}

console.log(result);