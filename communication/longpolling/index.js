const express = require("express");
const app = express();

let data = "Initial data";

const waitClientList = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/get-data", (req, res) => {
  if (data !== req.query.lastData) {
    res.send({ data });
  } else {
    waitClientList.push(res);
  }
});

app.get("/update-data", (req, res) => {
  data = req.query.data;
  while (waitClientList.length > 0) {
    if (waitClientList.length > 0) {
      const client = waitClientList.pop();
      client.json({ data });
    }
  }
  res.send({ sucess: true });
});

const port = 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));
