var express = require('express');
var app = express();
var router = require('./router/main')(app);
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var http = require('https');

//https를 이용하기전 인증서를 read해주는 부분입니다.

app.set('views',__dirname + '/views');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

//ejs를 실행해 준 뒤 views folder에서 html을 redering 해주는 부분입니다.

var server = app.listen(3333,function(){
    console.log("Express server has started on port 3333");
})
//http 서버를 시작하는 부분입니다.
app.use(express.static('public'));
//express 모듈을 통해 public안에있는 웹서비스적인 자바스크립트 ,css 파일을 불러옵니다.
