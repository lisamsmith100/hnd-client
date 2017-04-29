'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

const authEvents = require('./auth/events.js')
const entryEvents = require('./entry/events.js')

$(() => {
  authEvents.addHandlers()
  entryEvents.addHandlers()
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

// this is what we used for the training exercise
// 'use strict'
//
// const setAPIOrigin = require('../../lib/set-api-origin')
// const config = require('./config')
//
// $(() => {
//   setAPIOrigin(location, config)
// })
//
// // use require with a reference to bundle the file and use it in this file
// // const example = require('./example')
//
// // use require without a reference to ensure a file is bundled
// require('./example')
//
// const authEvents = require('./auth/events.js')
//
// // On document ready
// $(() => {
//   authEvents.addHandlers()
// })
