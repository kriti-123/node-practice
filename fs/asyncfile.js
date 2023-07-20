const fs = require('fs');
fs.writeFile('asyncFile.txt',"thsi is async file ",(err)=>{
   console.log(err);
});
fs.appendFile('asyncfile.txt',"this is appended text .",(err)=>{
    console.log(err);
});
fs.readFile('asyncfile.txt','utf8',(err,data)=>{
    console.log(data)
});
// fs.rename('asyncFile.txt','async.txt',(err)=>{
//     console.log(err);
// })
fs.unlink('asyncfile.txt',(err)=>{
    console.log(err);
})