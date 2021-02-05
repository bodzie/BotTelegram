const express = require("express");
const consola = require("consola");

const app = express();

app.get("/", (req, res) => {
  consola.info(res, res);
  res.send("hello dynamic " + Math.random());
});

const host = "0.0.0.0";
const port = 5000;

app.listen(port, host, () => consola.info(`listening on ${host}:${port}`));

module.exports = { app };
