const express = require("express");
const app = express();

let data = "Initial data";

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/get-data", (req, res) => {
  res.send({ data });
});

app.get("/update-data", (req, res) => {
  data = "Updated data";
  res.send({ data });
});

const port = 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));
