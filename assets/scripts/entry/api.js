'use strict'

const app = require('../app.js')
const config = require('../config')
const store = require('../store')
// const getFormFields = require('../../../lib/get-form-fields.js');

// authApi.signUp(authUi.success, authUi.failure, data);

const getEntries = function () {
  console.log('called getEntries in the entry/api.js')
  return $.ajax({
    url: config.apiOrigin + '/entries',
    method: 'GET',
    data
  })
}

// const signIn = function (data) {
//   console.log(data)
//   return $.ajax({
//     url: config.apiOrigin + '/sign-in/',
//     method: 'POST',
//     data
//   })
// }
//
// const signOut = function () {
//   return $.ajax({
//     method: 'DELETE',
//     url: config.apiOrigin + '/sign-out/' + store.user.id,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
// const changePassword = function (data) {
//   return $.ajax({
//     method: 'PATCH',
//     url: config.apiOrigin + '/change-password/' + store.user.id,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: data
//   })
// }

module.exports = {
  getEntries,

}
