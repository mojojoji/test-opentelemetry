"use strict";

const axios = require("axios");

const express = require("express");
const app = express();
const port = 3002;

app.get("/test", (req, res) => {
  console.log("[APP 2] Got request tracestate", req.headers["baggage"]);
  axios.get("http://localhost:3003/test").then(() => {
    res.json({
      app: 2,
    });
  });
});

app.listen(port, () => {
  console.log(`App2 listening on port ${port}`);
});
