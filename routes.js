// routes.js
var fs   = require('fs');
routes = {
  '/about.html': function(req, res) {
      res.end(fs.readFileSync('./about.html'))
  },

  '/faq.html': function(req, res) {
      res.end(fs.readFileSync('./faq.html'))
  }
};

module.exports = routes;
