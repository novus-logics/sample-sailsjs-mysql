/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  globalId: 'Users',
  attributes: {
    uuid: {
      type: 'string',
      primaryKey: true,
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    }
  },
  login: function (credentials) {
    return new Promise(function (resolve, reject) {
      Users.findone({
        userId: credentials.userId,
        password: credentials.password
      }).exec(function (err, record) {
        if(err) {
          reject(err);
        } else {
          resolve(record)
        }
      });
    })
  }
};

