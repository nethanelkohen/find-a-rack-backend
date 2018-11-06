var express = require("express");
var router = express.Router();

/* GET users listing. */

router.post("/", function(req, res, next) {
  const listName = req.headers.list_name;
  const listAddress = req.headers.list_address;
  const listValue = req.headers.list_value;
  const listLocationLatitude = req.headers.list_location_latitude;
  const listLocationLongitude = req.headers.list_location_longitude;

  let query =
    "INSERT INTO `racks` (name, address, value, location_latitude, location_longitude) VALUES ('" +
    req.headers.name +
    "', '" +
    req.headers.address +
    "', '" +
    req.headers.value +
    "', '" +
    req.headers.location_latitude +
    "', '" +
    req.headers.location_longitude +
    "')";

  connection.query(query, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send("Hello");
  });
});

module.exports = router;
