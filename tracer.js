"use strict";

const opentelemetry = require("@opentelemetry/api");
const { registerInstrumentations } = require("@opentelemetry/instrumentation");
const { NodeTracerProvider } = require("@opentelemetry/sdk-trace-node");

const { HttpInstrumentation } = require("@opentelemetry/instrumentation-http");

const provider = new NodeTracerProvider({});
provider.register();

registerInstrumentations({
  instrumentations: [new HttpInstrumentation()],
});
