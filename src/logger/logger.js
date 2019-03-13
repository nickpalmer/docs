const chalk = require('chalk')
const mode = require('./mode')

const write = (message, type) => {
  const currentMode = mode.get(type)
  const now = new Date(Date.now())
  return console.log(
    `${chalk[currentMode.color](
      `[${(`0${now.getHours()}`).slice(-2)}:${(`0${now.getMinutes()}`).slice(-2)}:${(`0${now.getSeconds()}`).slice(-2)}]`
    )} ${chalk[currentMode.color](message)}`
  )
}

module.exports = {
  warning(message) {
    write(message, 'warning')
  },
  error(message) {
    write(message, 'error')
  },
  success(message) {
    write(message, 'success')
  },
  info(message) {
    write(message, 'info')
  },
  echo(message) {
    write(message)
  }
}
