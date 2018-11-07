var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  connection.query("SELECT * from racks", function(error, results, fields) {
    if (error) {
      res.send(error);
    } else {
      res.send(JSON.stringify({ response: results }));
    }
    connection.end();
  });
});

module.exports = router;
