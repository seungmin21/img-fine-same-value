const express = require("express");
const path = require("path");
const app = express();
const port = 3001;
const fs = require("fs");
const bodyParser = require("body-parser");
const router = require('./src/router')
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

// static으로 정적 파일 제공(이미지파일)
app.use(express.static(path.join(__dirname, 'public')));

// 라우터 설정
app.use('/', router);

app.listen(port, () => {
  console.log(`서버 http://localhost:${port} 에서 실행 중입니다.`);
});
