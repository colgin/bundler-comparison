export function logInProduction() {
  if (process.env.NODE_ENV !== 'development') {
    console.log('log somthing')
  }
}