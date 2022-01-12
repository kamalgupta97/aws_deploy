const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://kamal:kamal@cluster0.kvzdq.mongodb.net/test"
  );
};
