const modes = {
  warning: {
    color: 'yellow'
  },
  error: {
    color: 'red'
  },
  success: {
    color: 'green'
  },
  info: {
    color: 'white'
  },
  normal: {
    color: 'grey'
  }
}

module.exports = {
  get(mode) {
    return modes[mode] || modes.normal
  },
  all() {
    return modes
  }
}
