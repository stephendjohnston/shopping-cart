const winston = require("winston");

const logger = winston.createLogger({
  level: 'info', // logging level
  format: winston.format.json(), // format of the logged messages
  defaultMeta: { service: 'shopping-cart-app' }, // metadata to include with every message
  transports: [
    new winston.transports.Console(), // log to the console
    new winston.transports.File({ filename: './logs/logfile.log' }) // log to a file
  ]
});

module.exports = {
  logger
}