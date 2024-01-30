const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const router = require('./src/router')
const cors = require('cors')
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

// static으로 정적 파일 제공(이미지파일)
app.use(express.static(path.join(__dirname, '..', 'src', 'cat-image')));
app.use(express.static(path.join(__dirname, 'public')));

// 라우터 설정
app.use('/', router);

app.listen(PORT, () => {
  console.log(`서버 http://localhost:${PORT} 에서 실행 중입니다.`);
});
