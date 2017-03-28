/**
 * Dashboard.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  globalId: 'CollectedData',
  attributes: {
    label: {
      type: 'string',
      required: true
    },
    value: {
      type: 'float',
      required: true
    },
    date: {
      type: 'date',
      required: true
    }
  },
  getAllData: function () {
    var dataToReturn = {
      trafficData: [],
      barLineData: {
        labels: [],
        series: []
      },
      pieChartData: {
        series: []
      }
    };

    var promises = [
      new Promise(function (resolve, reject) {
        CollectedData.query("SELECT SUM(value) as value, label FROM `collecteddata` GROUP BY label", [], function (err, result) {
          if(err) { reject(err)}
          dataToReturn.trafficData = result;
          resolve(true)
        })
      }),

      new Promise(function (resolve, reject) {
        CollectedData.query("SELECT SUM(value) as value, MONTH(date) as monthId FROM `collecteddata` GROUP BY MONTH(date) ORDER BY MONTH(date)", [], function (err, result) {
          if(err) { reject(err)}
          var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          dataToReturn.barLineData.labels = months;
          dataToReturn.barLineData.series.push(result.map(function (r, index) {
            if(index+1 == parseInt(r.monthId)) {
              return r.value
            }
            return 0;
          }));
          resolve(true)
        })
      }),

      new Promise(function (resolve, reject) {
        CollectedData.query("SELECT SUM(value) as value, MONTH(date) as monthId FROM `collecteddata` GROUP BY MONTH(date) ORDER BY MONTH(date)", [], function (err, result) {
          if(err) { reject(err)}
          dataToReturn.pieChartData.series = result.map(function (r, index) {
              return r.value
          });
          resolve(true)
        })
      })
    ];

    return Promise.all(promises).then(function () {
      return dataToReturn;
    })
  }
};

