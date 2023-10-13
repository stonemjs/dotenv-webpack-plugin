class App {
  static env (key) {
    return process.__env__[key]
  }
}

console.log('Get env variables')
console.log('BASE_URL', App.env('BASE_URL'))
console.log('APP_EMAIL', App.env('APP_EMAIL'))
console.log('APP_DESC', App.env('APP_DESC'))
