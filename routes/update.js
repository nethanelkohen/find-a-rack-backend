var express = require("express");
var router = express.Router();

/* GET users listing. */

router.post("/", function(req, res, next) {
  let query =
    "INSERT INTO `racks` (name, address, value, location_latitude, location_longitude) VALUES ('" +
    req.body.name +
    "', '" +
    req.body.address +
    "', '" +
    req.body.value +
    "', '" +
    req.body.locationLatitude +
    "', '" +
    req.body.locationLongitude +
    "')";

  connection.query(query, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send("Hello");
    connection.end();
  });
});

module.exports = router;
