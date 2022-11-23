const mongoose = require("mongoose");
require("dotenv").config();

module.exports.connect = function () {
  const URI = process.env.LOCAL;
  mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => console.log(error));
};
