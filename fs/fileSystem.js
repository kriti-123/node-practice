const fs = require('fs');
const path = require('path');
//------------async file---------------------------------------------------------
//to create a file asyncfile.txt
fs.writeFileSync('syncfile.txt',"this is sync file.");
fs.appendFileSync('syncfile.txt'," that is appended text in the file");
//this shows the data in buffer 
//<Buffer 74 68 69 73 20 69 73 20 61 73 79 6e 63 20 66 69 6c 65
const dataBuffer=fs.readFileSync('syncfile.txt');
console.log(dataBuffer);
//toString method to convert into string
const dataString=fs.readFileSync('syncfile.txt','utf8');
console.log(dataString);
//for deleting file
// fs.unlinkSync('asyncfile.txt');
//rename the file name
fs.renameSync('syncfile.txt','sync.txt');
//----------------------------------------------------------------------------------------

