import { cloneDeep } from 'lodash-es'

export function foo() {
  console.log(cloneDeep({}))
}

export * from './env'