/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  login: function(req, res) {
    Users.login(req.body).then(function (success) {
      var jwt = require('jwt-simple');
      var payload = {uuid: success.uuid};
      var secret = 'mY_aw3s0Me-aPp_s3Cr3T';
      var token = jwt.encode(payload, secret);

      res.send({
        user: success.name,
        token: token
      })
    }, function (err) {
      return res.serverError(err)
    })
  }
};

