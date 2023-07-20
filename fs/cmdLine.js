const fs = require('fs')
console.log(process.argv[2]);
const input = process.argv;
if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4]);
}
else if(input[2]=='remove'){
    fs.unlinkSync(input[3]);
}
// fs.writeFileSync(input[2],input[3]);
// fs.writeFile('kk.txt',"today is very nice",(err)=>{
//     console.log("file is created")
// });


