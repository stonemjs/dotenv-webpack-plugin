import { DotenvWebpack } from "../../dist/index.js"

const dotenv = new DotenvWebpack({
  expand: true,
  path: './.env.public',
  prefix: 'process.env.',
  ignoreProcessEnv: true
})

console.log('Dotenv plugin')
console.log(dotenv.getEnv())
console.log(dotenv.getData())
console.log('Process', Object.keys(process.env).filter(key => Object.keys(dotenv.getEnv()).includes(key)))