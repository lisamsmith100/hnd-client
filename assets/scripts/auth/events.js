'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('sign up button has been clicked')
  const data = getFormFields(event.target)
  console.log(data)
  api.signUp(data)
  .then(ui.success)
  .catch(ui.fail)
  // switched these from .done and .fail.  is that appropriate?
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in button has been clicked')
  const data = getFormFields(event.target)
  console.log(data)
  api.signIn(data)
  .then(ui.signInSuccess)
  .catch(ui.fail)
    // switched these from .done and .fail.  is that appropriate?
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out button has been clicked')
  const data = getFormFields(event.target)
  console.log(data)
  api.signOut(data)
  .then(ui.signOutSuccess)
  .catch(ui.fail)
    // switched these from .done and .fail.  is that appropriate?
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password button has been clicked')
  const data = getFormFields(event.target)
  console.log(data)
  api.changePassword(data)
  .then(ui.changePasswordSuccess)
  .catch(ui.fail)
    // switched these from .done and .fail.  is that appropriate?
}

const addHandlers = () => {
  $('.sign-up').on('submit', onSignUp)
  $('.sign-in').on('submit', onSignIn)
  $('.sign-out').on('submit', onSignOut)
  $('.change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
