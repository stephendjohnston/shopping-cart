// const opentelemetry = require("@opentelemetry/sdk-node");
// const {
//   getNodeAutoInstrumentations,
// } = require("@opentelemetry/auto-instrumentations-node");
// const {
//   OTLPTraceExporter,
// } = require("@opentelemetry/exporter-trace-otlp-http");

// const sdk = new opentelemetry.NodeSDK({
//   traceExporter: new OTLPTraceExporter({
//     // optional - default url is http://localhost:4318/v1/traces
//     url: "http://localhost:8200",
//     // optional - collection of custom headers to be sent with each request, empty by default
//     headers: {},
//   }),
//   instrumentations: [getNodeAutoInstrumentations()],
// });
// sdk.start();