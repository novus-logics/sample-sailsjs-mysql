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
      var payload = { id: success.id };
      var secret = 'mY_aw3s0Me-aPp_s3Cr3T';
      var token = jwt.encode(payload, secret);

      res.send({
        user: success,
        token: token
      })
    }, function (err) {
      return res.status(400).send(err.message)
    })
  }
};

