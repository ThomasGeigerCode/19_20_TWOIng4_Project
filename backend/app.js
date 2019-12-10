var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/user1', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);


const userSchema = new mongoose.Schema({
  prenom:{
    type: String,
    required: true,
  },
  nom:{
    type: String,
    required: true,
  },
  statut:{
    type: String,
    required: true,
  },
})

var User = mongoose.model('User', userSchema);



module.exports = app;
