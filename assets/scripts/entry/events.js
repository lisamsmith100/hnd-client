'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onShowEntries = function (event) {
  event.preventDefault()
  // console.log('onShowEntries button has been clicked')
  api.showEntries()
  .then(ui.showEntriesSuccess)
  .catch(ui.showEntriesFailure)
}

const onAddEntry = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('data is ', data)
  api.addEntry(data)
  .done(ui.addEntrySuccess)
  .fail(ui.addEntryFailure)
}

const onUpdateEntry = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('onUpdateEntry has been called')
  // console.log('event is ', event)
  // console.log('data being sent to api is ', data)
  api.updateEntry(data)
  .done(ui.updateEntrySuccess)
  .fail(ui.updateEntryFailure)
}

const onDeleteEntry = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('event is ', event)
  // console.log('data being sent to api is ', data)
  api.deleteEntry(data)
  .done(ui.deleteEntrySuccess)
  .fail(ui.deleteEntryFailure)
}

const addHandlers = function (event) {
  $('#showAllHnD').on('click', onShowEntries)
  $('#addNewHnD').on('submit', onAddEntry)
  $('#updateOneHnD').on('submit', onUpdateEntry)
  $('#deleteOneHnD').on('submit', onDeleteEntry)
}

module.exports = {
  addHandlers,
  onShowEntries,
  onAddEntry,
  onUpdateEntry,
  onDeleteEntry
}
