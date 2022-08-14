'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function sum(a, b) {
  return a + b;
}
function multiple(a, b) {
  return a * b;
}

const import_meta = {};
function consoleImportUrl() {
  console.log(import_meta.url);
}

function logInProduction() {
  {
    console.log("log somthing");
  }
}

exports.consoleImportUrl = consoleImportUrl;
exports.logInProduction = logInProduction;
exports.multiple = multiple;
exports.sum = sum;
