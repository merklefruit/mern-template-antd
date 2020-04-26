const mongoose = require("mongoose");
const url = process.env.DATABASE_URL;

mongoose
  .connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true
  })
  .catch(() => console.error("Error connecting to database"));

module.exports = {
  User: require("../users/user.model")
};
