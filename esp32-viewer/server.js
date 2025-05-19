const express = require('express');
const path = require('path');
const app = express();

const correctPassword = process.env.CORRECT_PASSWORD;
const mqttTopic = process.env.MQTT_TOPIC;

app.use(express.static(path.join(__dirname)));

app.get('/check-password', (req, res) => {
  const userInput = req.query.input;
  if (userInput === correctPassword) {
    res.json({ success: true, topic: mqttTopic });
  } else {
    res.json({ success: false });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
