var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  connection.query("SELECT * from racks", function(error, results, fields) {
    if (error) {
      // res.send(JSON.stringify({ status: 500, error: error, response: null }));
      res.send(error);
      //If there is error, we send the error in the error section with 500 status
    } else {
      res.send(
        JSON.stringify({
          response: results
        })
      );
    }
  });
});

module.exports = router;
