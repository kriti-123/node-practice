const http = require('http');

const server = http.createServer((req, res) => {
  // console.log(req.url)
  // res.end('Hello World');
  if(req.url=='/'){
    res.end("home");
  }
  else if(req.url=='/about'){
    res.end("about");
  }
  else{
    res.end('common')
  }

});



server.listen(4001, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});






//--------------------------------------------------------------------------
// const events = require('events');

// let listenerCallback = (data) => {
//     console.log('Celebrate ' + data);
// }
// let myEmitter = new events.EventEmitter();
// myEmitter.on('celebrati', listenerCallback);
// myEmitter.emit('celebrati','good times, come on!');
// myEmitter.emit('celebrati','bad times, come on!');
// let countnum=0;
// let countTotal = () =>{
//     countnum++;
//     console.log("Hello",countnum);
// }

// let myNewEmiter = new events.EventEmitter();
// myNewEmiter.on('countn',countTotal);
// myNewEmiter.emit('countn','');
// myNewEmiter.emit('countn','');
// myNewEmiter.emit('countn','');
// myNewEmiter.emit('countn','');