var express = require('express');
var app = express();
var router = require('./router/main')(app);
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var http = require('https');
//Server2와 다른부분으로서 https를 불러오는 부분입니다.

var nodeStatic = require('node-static');

//https를 이용하기전 인증서를 read해주는 부분입니다.
//바탕화면에 인증서를 두시면 됩니다.
const options = {
    key:fs.readFileSync('./private.pem'),
    cert:fs.readFileSync('./public.pem')
};

app.set('views',__dirname + '/views');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);
//ejs를 실행해 준 뒤 views folder에서 html을 redering 해주는 부분입니다.

var fileServer = new(nodeStatic.Server)();

http.createServer(options, app).listen(3333, () => {
    console.log('HTTPS Server Started');
});
//https를 통해서 서버를 시작하는부분입니다.
app.use(express.static('public'));
//express 모듈을 통해 public안에있는 웹서비스적인 자바스크립트 ,css 파일을 불러옵니다.
