"use strict";

const express = require("express");
const app = express();
const port = 3003;

app.get("/test", (req, res) => {
  console.log("[APP 3] Got request tracestate", req.headers["baggage"]);
  res.json({
    app: 3,
  });
});

app.listen(port, () => {
  console.log(`App3 listening on port ${port}`);
});
