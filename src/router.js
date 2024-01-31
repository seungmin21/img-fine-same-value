const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

router.post('/api/addValue', (req, res) => {
  const { value } = req.body;

  if (!value) {
    return res.status(400).send('Invalid value');
  }

  fs.readFile('src/log.json', 'utf8', (err, data) => {
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

    fs.writeFile('src/log.json', JSON.stringify(log), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error writing to log file');
      }

      res.status(200).send('Value added successfully');
    });
  });
});

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