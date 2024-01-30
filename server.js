const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const router = require('./src/router')
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// static으로 정적 파일 제공(이미지파일)
app.use('/cat-image', express.static(path.join(__dirname, 'cat-image')));
app.use(express.static(path.join(__dirname, 'public')));

// 라우터 설정
app.use('*', router);

app.listen(PORT, () => {
  console.log(`서버 http://localhost:${PORT} 에서 실행 중입니다.`);
});
