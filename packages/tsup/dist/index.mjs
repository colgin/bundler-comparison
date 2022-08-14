// src/math.ts
function sum(a, b) {
  return a + b;
}
function multiple(a, b) {
  return a * b;
}

// src/import-url.ts
function consoleImportUrl() {
  console.log(import.meta.url);
}

// src/env.ts
function logInProduction() {
  if (true) {
    console.log("log somthing");
  }
}
export {
  consoleImportUrl,
  logInProduction,
  multiple,
  sum
};
