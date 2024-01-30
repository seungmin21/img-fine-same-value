const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const fs = require("fs");
const bodyParser = require("body-parser");
const router = require('./src/router')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// static으로 정적 파일 제공(이미지파일)
app.use('/cat-image', express.static(path.join(__dirname, 'cat-image')));
app.use(express.static(path.join(__dirname, 'public')));

// 라우터 설정
app.use('/', router);

app.listen(port, () => {
  console.log(`서버 http://localhost:${port} 에서 실행 중입니다.`);
});
