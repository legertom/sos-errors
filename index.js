const fs = require('fs');
const path = require('path');

function logErrorToFile(error, filepath) {
  const errorMsg = `${new Date().toISOString()}: ${error.stack}\n`;
  fs.appendFileSync(filepath, errorMsg);
}

function addContextToError(error) {
  error.context = {
    file: error.stack.split('\n')[1].match(/\(([^)]+)\)/)[1],
    line: error.stack.split('\n')[1].match(/:\d+:\d+/)[0],
    function: error.stack.split('\n')[1].match(/at\s(.*)/)[1],
  };
  return error;
}

function createCustomError(code, message) {
  const error = new Error(message);
  error.code = code;
  return error;
}

module.exports = {
  logErrorToFile,
  addContextToError,
  createCustomError,
};
