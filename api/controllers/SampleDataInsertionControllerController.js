/**
 * SampleDataInsertionControllerController
 *
 * @description :: Server-side logic for managing Sampledatainsertioncontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  insertSampleData: function (req, res) {
    User.create({
      uuid: 'U101151465254',
      name:'John Doe',
      password: 'P@5sW0Rd'
    }).exec(function (err, finn){
      if (err) { return res.serverError(err); }
    });

    var collectedData = [
      {

      },
      {

      }
    ];

    collectedData.forEach(function (dataToInsert) {
      CollectedData.create(dataToInsert).exec(function (err, finn){
        if (err) { return res.serverError(err); }
      });
    })

  }
};

