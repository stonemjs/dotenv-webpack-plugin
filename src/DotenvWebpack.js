import path from 'path'
import Dotenv from 'dotenv'
import { DefinePlugin } from 'webpack'
import DotenvExpand from 'dotenv-expand'

/**
 * Class representing a DotenvWebpack.
 *
 * @author Mr. Stone <pierre.evens16@gmail.com>
 */
export class DotenvWebpack {
  /**
   * Options.
   *
   * @typedef  {Object}  Options
   * @property {string}  [path=./.env] - The location of the environment variable.
   * @property {boolean} [expand=false] - If true, expand environment variables.
   * @property {boolean} [override=false] - If true, override environment variables.
   * @property {boolean} [ignoreProcessEnv=false] - If true, turn off writing to `process.env`.
   * @property {boolean} [debug=process.env.DEBUG] - If true, turn on logging to help debugging.
   * @property {string}  [prefix=process.env.] - The prefix, used to denote environment variables.
   */

  /**
   * The DotenvWebpack.
   *
   * @param {Options} options - The options.
   */
  constructor (options = {}) {
    this.options = Object.assign({}, {
      path: './.env',
      expand: false,
      override: false,
      prefix: 'process.env.',
      ignoreProcessEnv: false,
      debug: process.env.DEBUG
    }, options)
  }

  /**
   * Webpack plugin apply method.
   *
   * @return {Object}
   */
  apply (compiler) {
    new DefinePlugin(this.getParsedData()).apply(compiler)
  }

  /**
   * Get and parse data from .env file.
   *
   * @return {Object}
   */
  getParsedData () {
    return this.options.prefix.endsWith('.')
      ? Object
        .entries(this.getEnv())
        .reduce((prev, [key, value]) => {
          return Object.assign(prev, { [`${this.options.prefix}${key}`]: JSON.stringify(value) })
        }, {})
      : { [this.options.prefix]: JSON.stringify(this.getEnv()) }
  }

  /**
   * Get the env variables in .env file use Dotenv package.
   *
   * @return {Object}
   */
  getEnv () {
    const config = {
      debug: this.options.debug,
      override: this.options.override,
      path: path.resolve(process.cwd(), this.options.path),
      processEnv: this.options.ignoreProcessEnv ? {} : process.env
    }

    if (this.options.expand) {
      return DotenvExpand.expand({ ignoreProcessEnv: this.options.ignoreProcessEnv, parsed: Dotenv.config(config).parsed }).parsed
    }

    return Dotenv.config(config).parsed
  }
}
