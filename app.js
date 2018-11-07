var express = require("express");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var http = require("http");

var racks = require("./routes/racks");
var update = require("./routes/update");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
//Database connection
app.use(function(req, res, next) {
  global.connection = mysql.createConnection({
    host: "localhost" || process.env.DB_HOST,
    user: "root" || process.env.DB_USER,
    password: "" || process.env.DB_PASSWORD,
    database: "racks" || process.env.DB_NAME
  });
  connection.connect();
  next();
});

app.use("/api/v1/racks", racks);
app.use("/api/v1/update", update);
app.get("/", (req, res) => res.send("Server is live"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(process.env.PORT || 3000, function() {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});

module.exports = app;
// var server = http.createServer(app);
// server.listen(process.env.PORT || 5000);
