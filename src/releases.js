const axios = require('axios')
const dotenv = require('dotenv')
const logger = require('./logger/logger')
const cache = require('./cache')

dotenv.config()

const githubApiUrl =
  'https://api.github.com/repos/sarahdayan/dinero.js/releases'
const releasesCacheFile = 'releases.json'

const githubToken = process.env.GITHUB_TOKEN
if (!githubToken)
  logger.warning('No GITHUB_TOKEN found, set one in your .env file.')

const releasesCache = (async () => {
  logger.echo('Retrieving releases cache...')
  return (
    (await cache.get({
      filename: releasesCacheFile
    })) || { time: -1, releases: [{}] }
  )
})()

module.exports = {
  async getReleases() {
    const now = Date.now()

    if (now - (await releasesCache).time < 1000 * 60 * 30) {
      logger.echo('Releases cache is fresh, using cache.')
      return (await releasesCache).releases
    }

    logger.echo('Fetching new releases...')

    const releases = (async () => {
      try {
        return await (await axios.get(githubApiUrl, {
          headers: {
            Authorization: githubToken ? `token ${githubToken}` : undefined
          }
        })).data
      } catch (err) {
        logger.warning('Could not fetch GitHub releases, using cache instead.')
        return (await releasesCache).releases
      }
    })()

    await cache.save({
      data: JSON.stringify({ time: now, releases: await releases }),
      filename: releasesCacheFile,
      onSuccess() {
        logger.success('Saved new cache.')
      },
      onError(err) {
        logger.error('Could not save cache.')
        logger.error(err)
      }
    })

    return await releases
  }
}
