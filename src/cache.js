const bluebird = require('bluebird')
const fs = bluebird.promisifyAll(require('fs'))

const cacheDirectory = '.cache'

module.exports = {
  async save({
    data = {},
    filename = '',
    onSuccess = () => { },
    onError = () => { }
  } = {}) {
    try {
      await fs.mkdirAsync(cacheDirectory, { recursive: true })
      await fs.writeFileAsync(`${cacheDirectory}/${filename}`, data, 'utf8')
      onSuccess()
    } catch (err) {
      onError(err)
    }
  },
  async get({
    filename = ''
  } = {}) {
    try {
      const cache = JSON.parse(await fs.readFileAsync(`${cacheDirectory}/${filename}`))
      return cache
    } catch (err) {
      return null
    }
  }
}
