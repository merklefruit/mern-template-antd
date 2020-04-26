const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

// Helpers
const jwt = require("./helpers/jwt");
const middlewares = require("./helpers/error-handler");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(jwt());

// API routes:
app.use("/users", require("./users/user.controller"));

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
