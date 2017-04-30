'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onShowEntries = function (event) {
  event.preventDefault()
  console.log('onShowEntries button has been clicked')
  // const data = getFormFields(event.target)
  // console.log(data)
  api.showEntries()
  .then(ui.showEntriesSuccess)
  .catch(ui.fail)
}

const onAddEntry = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addEntry(data)
  .done(ui.addEntrySuccess)
  .fail(ui.fail)
}

const onShowOneEntry = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showOneEntry(data)
  .done(ui.showOneEntrySuccess)
  .fail(ui.fail)
}

const onUpdateEntry = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateEntry(data)
  .done(ui.updateEntrySuccess)
  .fail(ui.fail)
}

const onHideEntry = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.hideEntry(data)
  .done(ui.hideEntrySuccess)
  .fail(ui.fail)
}

const onDeleteEntry = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteEntry(data)
  .done(ui.deleteEntrySuccess)
  .fail(ui.fail)
}

const addHandlers = () => {
  $('#showAllHnD').on('click', onShowEntries),
  $('#addNewHnD').on('submit', onAddEntry),
  $('#showOneHnD').on('submit', onShowOneEntry),
  $('#updateOneHnD').on('submit', onUpdateEntry),
  $('#hideOneHnD').on('submit', onHideEntry),
  $('#deleteOneHnD').on('submit', onDeleteEntry)
}

module.exports = {
  addHandlers
}
