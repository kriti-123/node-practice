const path = require('path');
const fs = require('fs');
//making a new directory files
fs.mkdir('files',(err)=>{
    console.log(err)
})
const dirPath = path.join(__dirname,'files');
console.log(dirPath);
for(let i=0;i<5;i++){
   fs.writeFileSync(`${dirPath}/hello${i}.txt`,"this is the file folder");
}

// ----for printing files name whicfh is present in files folder------
// fs.readdir(dirPath,(err,data)=>{
//     data.forEach((item)=>{
//        console.log(item);
//     })
// })
//-----remove the directory---------
// fs.rmdir('files',(err)=>{
//     console.log(err);
// })