"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  consoleImportUrl: () => consoleImportUrl,
  logInProduction: () => logInProduction,
  multiple: () => multiple,
  sum: () => sum
});
module.exports = __toCommonJS(src_exports);

// ../../node_modules/.pnpm/tsup@6.2.2/node_modules/tsup/assets/cjs_shims.js
var getImportMetaUrl = () => typeof document === "undefined" ? new URL("file:" + __filename).href : document.currentScript && document.currentScript.src || new URL("main.js", document.baseURI).href;
var importMetaUrl = /* @__PURE__ */ getImportMetaUrl();

// src/math.ts
function sum(a, b) {
  return a + b;
}
function multiple(a, b) {
  return a * b;
}

// src/import-url.ts
function consoleImportUrl() {
  console.log(importMetaUrl);
}

// src/env.ts
function logInProduction() {
  if (true) {
    console.log("log somthing");
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  consoleImportUrl,
  logInProduction,
  multiple,
  sum
});
