var express = require("express");
var router = express.Router();

router.post("/", function(req, res, next) {
  if (
    !req.body.name ||
    !req.body.address ||
    !req.body.value ||
    !req.body.locationLatitude ||
    !req.body.locationLongitude
  ) {
    return res.status(500).send("Make sure you've added every value");
  }

  if (req.body.name.length < 3) {
    return res.status(500).send("Name can't be less than 3 characaters");
  }

  let query =
    "INSERT INTO `racks` (name, address, value, location_latitude, location_longitude) VALUES ('" +
    req.body.name.toUpperCase() +
    "', '" +
    req.body.address.toUpperCase() +
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
    res.send("Row added");
    connection.end();
  });
});

module.exports = router;
