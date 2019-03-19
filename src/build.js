const axios = require('axios')
const logger = require('./logger/logger')
const cache = require('./cache')

const jsdelivrUrl =
  'https://data.jsdelivr.com/v1/package/npm/dinero.js@1.6.0'
const buildCacheFile = 'build.json'

const buildCache = (async () => {
  logger.echo('Retrieving build cache...')
  return (
    (await cache.get({
      filename: buildCacheFile
    })) || { time: -1, build: [{}] }
  )
})()

module.exports = {
  async getBuild() {
    const now = Date.now()

    if (now - (await buildCache).time < 1000 * 60 * 30) {
      logger.echo('Build cache is fresh, using cache.')
      return (await buildCache).build
    }

    logger.echo('Fetching new build...')

    const build = (async () => {
      try {
        return await (await axios.get(jsdelivrUrl)).data
      } catch (err) {
        logger.warning('Could not fetch GitHub build, using cache instead.')
        return (await buildCache).build
      }
    })()

    await cache.save({
      data: JSON.stringify({ time: now, build: await build }),
      filename: buildCacheFile,
      onSuccess() {
        logger.success('Saved new build cache.')
      },
      onError(err) {
        logger.error('Could not save build cache.')
        logger.error(err)
      }
    })

    return await build
  }
}
