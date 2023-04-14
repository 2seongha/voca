"use strict";

//모듈
const express = require("express");
const app = express();
const cors = require('cors');
const mysql = require('mysql');

//데이터베이스
const con = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'0000',
})
con.connect((err)=>{
  if(err) throw err;
  console.log("[Mysql] 연결 성공")
})


//라우팅
const home = require("./src/routes/home"); 

//앱 세팅
app.set("views", "./src/views");
// app.set('view engine', 'html');
app.use(cors());
app.use(express.static(`${__dirname}/src/views/home/voca/build`));
app.use(express.json());
//url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({extended:true}));
app.use("/", home); // use -> 미들웨어 등록해주는 메소드 입니다. dd


module.exports = app;