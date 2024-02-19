const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// get 요청으로 index.html을 응답해서 페이지를 보여주는 형태
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

//router.get("/api/test", res => {
//  res.sendFile(path.join(__dirname, "public/test.html"))
//})


// POST 요청으로 log.json을 읽고 log.json에 데이터가 기록되는 형태
router.post('/api/addValue', (req, res) => {
  const { value } = req.body;

  if (!value) {
    return res.status(400).send('Invalid value');
  }

  fs.readFile('src/log.json', 'utf8', (err, data) => {
    // 못 읽었을 때 에러 처리
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading log file');
    }

    // 읽었을 경우 JSON을 분석
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

    fs.writeFile('src/log.json', JSON.stringify(log), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error writing to log file');
      }

      res.status(200).send('Value added successfully');
    });
  });
});

// GET 요청으로 log.json에 있는 데이터를 가져오는 것
router.get('/api/logData', (req, res) => {
  fs.readFile(path.join(__dirname, 'log.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading log.json file:', err);
      res.status(500).send('Error log.json file');
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseError) {
      console.error('Error parsing log.json file:', parseError);
      res.status(500).send('Error parsing log.json file');
    }
  });
});

module.exports = router;