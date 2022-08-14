Object.defineProperty(exports, '__esModule', { value: true });

var lodashEs = require('lodash-es');

function logInProduction() {
  if (process.env.NODE_ENV !== 'development') {
    console.log('log somthing');
  }

  console.log((typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('index.js', document.baseURI).href)));
}

function foo() {
  console.log(lodashEs.cloneDeep({}));
}

exports.foo = foo;
exports.logInProduction = logInProduction;
//# sourceMappingURL=index.js.map
