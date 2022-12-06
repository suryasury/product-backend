const logger = require("./logger");
const morgan = require("morgan");

const options = {
  stream: {
    write: (message) => logger.info(message),
  },
};

const httpLogger = morgan("combined", options);

module.exports = httpLogger;
