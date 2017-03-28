/**
 * SampleDataInsertionControllerController
 *
 * @description :: Server-side logic for managing Sampledatainsertioncontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
module.exports = {
  insertSampleData: function (req, res) {
    Users.create({
      uuid: 'U101151465254',
      name:'John Doe',
      password: 'P@5sW0Rd'
    }).exec(function (err, finn){
      if (err) { return res.serverError(err); }
    });

    var labels = ['Other', 'Search engines', 'Referral Traffic', 'Direct Traffic', 'Ad Campaigns'];
    var moment = require('moment');

    for(var i=1; i <=1000; i++) {
      var label = labels[Math.floor(Math.random()*labels.length)];
      var value = Math.floor(Math.random() * 300);
      var date = randomDate(moment(moment().subtract(1, 'y')).toDate(), moment().toDate());

      var insertObj = {
        label: label,
        value: value,
        date: date
      };

      console.log(insertObj);

      CollectedData.create(insertObj).exec(function (err, finn){
        if (err) { return res.serverError(err); }
      });
    }

    return res.ok();
  }
};

