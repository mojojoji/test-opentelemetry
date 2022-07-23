"use strict";

const axios = require("axios");

const express = require("express");
const app = express();
const port = 3000;

app.get("/test", (req, res) => {
  console.log("[APP 1] Got request tracestate", req.headers["baggage"]);
  axios
    .get("http://localhost:3002/test", {
      headers: {
        // Injecting baggage that will get propogated through the stack
        // This will be injected by pitcher proxy based on the url
        // And the will get propogated thorugh all components that use opentelemetry
        baggage: "testkey=testvalue",
      },
    })
    .then(() => {
      res.json({
        app: 2,
      });
    });
});

app.listen(port, () => {
  console.log(`App1 listening on port ${port}`);
});
