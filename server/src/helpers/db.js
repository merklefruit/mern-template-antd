const mongoose = require("mongoose");
const url = process.env.DATABASE_URL;

mongoose
  .connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(() => console.error("Error connecting to the database"));

mongoose.Promise = global.Promise;

module.exports = {
  User: require("../users/user.model")
};
