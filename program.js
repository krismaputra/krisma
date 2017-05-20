////step1////
/*
console.log('HELLO WORLD');
*/
/////STEP2///
/*
var sum=0;
var count=0;
process.argv.forEach(function(item){
  //console.log(item);
  if(count>1){
    sum += parseInt(item);
  }
  count++;
});

console.log(sum);
*/
/////step3////
/*
var fs=require('fs');

var buffer = fs.readFileSync(process.argv[2]).toString().split('\n').length-1;
console.log(buffer);*/
////step4////
/*var fs = require('fs');
var jumlahLine;
fs.readFile(process.argv[2], function(err, data){
  if(err){
    console.log('error,err');
    return;
  }
  jumlahLine=data.toString().split('\n').length-1;
  console.log(jumlahLine);
});
*/
////step5////
/*
var fs=require('fs');
var path=require('path');

fs.readdir(process.argv[2],function(err, list){
  for (var i=0; i<list.length;i++){
    if(('.'+process.argv[3]) == path.extname(list[i])){
      console.log(list[i]);
    }else {
      continue;
      }
    }
});
*/
////step6////
/*
var modul=require('./module');

modul (process.argv[2],process.argv[3],function(err, data){
//console.log(data);
data.forEach(function(item){
console.log(item);
  });
});
*/

////step7////

/*var http = require('http');

http.get(process.argv[2],function(res){
    res.setEncoding('utf8');
    res.on('data',function(chunk) {
      console.log(chunk);

    });

    res.on('error', function (err) {
      console.log(err);
    })
});
*/
////step8////
/*
var http=require('http');

http.get(process.argv[2],function(res){

  var rawData = '';

  res.setEncoding('utf8');
  res.on('data',function(chunk){
  //console.log(chunk);
  rawData += chunk;
});
res.on('end',function() {
  console.log(rawData.length);
  console.log(rawData);
});
res.on('error',function(err) {
  console.log(err);

  })
});
*/
///step 9///
/*
var http = require ('http');

http.get(process.argv[2],function(res){

var
})
*/
////step 10///

/*var net = require('net');

net.createServer(function(socket){
  var date = new Date();
  //"YYYY-MM-DD hh:mm"
  var month = date.getMonth()+1;
  month = (month.length>1) ? month:'0'+month;
  var minute = date.getMinutes();
  minute = (minute<10) ?'0'+minute:minute;
  socket.write(date.getFullYear()+'-'+month+'-'+date.getDate()+' '+date.getHours()+':'+minute+"\n");
  socket.end('');
}).listen(process.argv[2]);
*/

///step11///

/*var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
  var stream = fs.createReadStream(process.argv[3]);
  stream.on('open',function(){
    stream.pipe(res);
  });
  stream.on('close',function(){
    res.end();
  });
}).listen(process.argv[2]);
*/

////step12///
/*
var http = require('http');
var map = require('thought2-map');

http.createServer(function(req,res){
  if(req.method == 'POST'){
    var _map = map(function(chunk){
      return chunk.toString().toUpperCase();
    });
    req.pipe(_map).pipe(res);
  }
}).listen(process.argv[2]);
*/

////step13///

var http = require('http');
var url = require ('url');
var date = new Date(parseUrl.query.iso);
http.createServer(function(req, res){
  var paseUrl.pathname) {
    case'/api/pasretime':

    res.WriteHand(200,{
      "Content-Type";"aplication/json",
    });
    res.end(JSON.stringify({
      "hour":'',
      "minute":,
      "second":
    }));
    break;
  }
})
