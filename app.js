const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const fs = require("fs");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 정적 파일 제공 설정
app.use('/cat-image', express.static(path.join(__dirname, 'cat-image')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post('/addValue', (req, res) => {
  const { value } = req.body;

  if (!value) {
    return res.status(400).send('Invalid value');
  }

  fs.readFile('log.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading log file');
    }

    let log = [];
    if (data) {
      try {
        log = JSON.parse(data);
      } catch (parseError) {
        console.error(parseError);
        return res.status(500).send('Error parsing log file');
      }
    }

    log.push(value); // 새 값 추가

    fs.writeFile('log.json', JSON.stringify(log), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error writing to log file');
      }

      res.status(200).send('Value added successfully');
    });
  });
});


app.listen(port, () => {
  console.log(`서버 http://localhost:${port} 에서 실행 중입니다.`);
});
