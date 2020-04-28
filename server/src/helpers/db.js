const mongoose = require("mongoose");
const url = process.env.DATABASE_URL;

mongoose
  .connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("@@@  Connected to MongoDB  @@@"))
  .catch(() => console.error("@@@  Error connecting to MongoDB  @@@"));

mongoose.Promise = global.Promise;

module.exports = {
  User: require("../users/user.model")
};
