import { cloneDeep } from 'lodash-es';

function logInProduction() {
  if (process.env.NODE_ENV !== 'development') {
    console.log('log somthing');
  }

  console.log(import.meta.url);
}

function foo() {
  console.log(cloneDeep({}));
}

export { foo, logInProduction };
//# sourceMappingURL=index.esm.js.map
