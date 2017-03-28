/**
 * DashboardController
 *
 * @description :: Server-side logic for managing dashboards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  getDashboardData: function(req, res) {
    return res.json({ quote: quoter.getRandomOne() });
  },
  getOtherDashboardData: function(req, res) {
    return res.json({ quote: quoter.getRandomOne() });
  }
};

