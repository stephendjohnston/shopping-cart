// Add this to the VERY top of the first file loaded in your app
var apm = require('elastic-apm-node').start({

  // Override the service name from package.json
  // Allowed characters: a-z, A-Z, 0-9, -, _, and space
  serviceName: 'shopping-cart',

  // Use if APM Server requires a secret token
  secretToken: '',

  // Set the custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'http://3.99.136.54:8200',

  // Set the service environment
  environment: 'my-environment'
})

const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/api");
const uiRoutes = require("./routes/ui");
require("dotenv").config();

const { logger } = require("./services/logger.js");

const app = express();

const port = process.env.PORT || 5001;

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


app.use(express.static(__dirname + "/public"));

app.use(express.json());

app.use("/api", apiRoutes);
app.use("/ui", uiRoutes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  logger.info("Server running on port 5001");
});
