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

export { consoleImportUrl, logInProduction, multiple, sum };
