const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// index.html을 읽어서 get요청을 하는 로직
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});


// 클라이언트 파일에서 서버로 post 요청을 진행하는 로직
router.post('/addValue', (req, res) => {
  const { value } = req.body;
  
  if (!value) {
    return res.status(400).send('Invalid value');
  }
  
  fs.readFile('./object/src/log.json', 'utf8', (err, data) => {
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
    
    fs.writeFile('./object/src/log.json', JSON.stringify(log), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error writing to log file');
      }
      
      res.status(200).send('Value added successfully');
    });
  });
});

// fs.readFilSync(path(분석할 매체), option(옵션))
const jsonData = JSON.parse(fs.readFileSync('./src/object/data.json', 'utf8'))
const jsonImageData = JSON.parse(fs.readFileSync('./src/object/ImageData.json', 'utf8'))

// src/data.json파일을 조회할 로직
router.get('/getData', (req, res) => {
  res.json(jsonData);
});

router.get('/getImage', (req, res) => {
  res.json(jsonImageData)
})

module.exports = router;