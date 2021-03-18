var express = require('express');
const passport = require('passport');
const passportConfig =require('./passport');
var app = express();
passportConfig();

var router = require('./router/main')(app);
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var http = require('https');
const https = require('https');
const sslConfig = require('./ssl-config');

var nodeStatic = require('node-static');

const options = {
    key: sslConfig.privateKey,
    cert: sslConfig.certificate,
    passphrase: 'jun16417814' // certificate을 생성하면서 입력하였던 passphrase 값
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
app.use(passport.initialize());
app.use(passport.session());
//express 모듈을 통해 public안에있는 웹서비스적인 자바스크립트 ,css 파일을 불러옵니다.