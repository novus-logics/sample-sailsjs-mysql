/**
 * DashboardController
 *
 * @description :: Server-side logic for managing dashboards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var DATA = {
  trafficData: [
    {
      value: 25000,
      label: 'Other'
    }, {
      value: 1500,
      label: 'Search engines'
    }, {
      value: 1000,
      label: 'Referral Traffic'
    }, {
      value: 1200,
      label: 'Direct Traffic'
    }, {
      value: 400,
      label: 'Ad Campaigns'
    }
  ],

  barLineData:  {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
      [15, 24, 43, 27, 5, 10, 23, 44, 68, 50, 26, 8]
    ]
  },

  pieChartData: {
    series: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  }


};

module.exports = {

  getDashboardData: function(req, res) {
    CollectedData.getAllData().then(function (data) {
      return res.json({
        trafficData: data.trafficData
      });
    });
  },

  getOtherDashboardData: function(req, res) {
    CollectedData.getAllData().then(function (data) {
      return res.json({
        sampleBarData: data.barLineData,
        simpleLineData: data.barLineData,
        simplePieData: data.pieChartData
      });
    });
  }
};

