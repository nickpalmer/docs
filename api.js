const bluebird = require('bluebird')
const express = require('express')
const logger = require('./src/logger/logger')
const pad = require('pad')
const path = require('path')

const utils = require('./src/utils')
const { getReleases } = require('./src/releases')

const fs = bluebird.promisifyAll(require('fs'))
const app = express()
const port = process.env.PORT || 4000
const baseUrl = `http://localhost:${port}`

app.listen(port)
;(async () => {
  const resources = (await utils.getResources('./docs', {
    ignoreFiles: ['.DS_Store']
  }))
    .flat(Infinity)
    .map(resource => ({
      resource,
      route: resource
        .split('/')
        .map(x => utils.resourceWithoutOrder(utils.filenameWithoutExtension(x)))
        .join('/')
    }))

  resources.forEach(route => {
    app.get(route.route, async (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      try {
        res.send(
          utils.toPayload({
            data: utils.parseData(
              await fs.readFileAsync(route.resource, 'utf8'),
              path.extname(route.resource).replace('.', '')
            )
          })
        )
      } catch (err) {
        res.statusCode = 500
        res.end(
          JSON.stringify(err.response ? err.response.data : { error: err + '' })
        )
      }
    })
  })

  app.get('/docs', async ({ protocol, headers }, res) => {
    res.setHeader('Content-Type', 'application/json')
    try {
      res.send(
        utils.toPayload(
          Object.assign(
            {},
            ...resources.map(({ route }) => ({
              [route.substring(1).replace(/([\/-])/gm, '_')]: `${protocol}://${
                headers.host
              }${route}`
            }))
          )
        )
      )
    } catch (err) {
      res.statusCode = 500
      res.end(
        JSON.stringify(err.response ? err.response.data : { error: err + '' })
      )
    }
  })

  const releases = await getReleases()

  app.get('/docs/releases', async (req, res) => {
    try {
      res.json(releases)
    } catch (err) {
      res.statusCode = 500
      res.end(
        JSON.stringify(err.response ? err.response.data : { error: err + '' })
      )
    }
  })

  logger.info(`${pad('Documentation:', 16)} ${baseUrl}/docs`)
  logger.info(`${pad('GitHub releases:', 16)} ${baseUrl}/docs/releases`)
})()
