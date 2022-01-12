const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://aws.000uh.mongodb.net/myFirstDatabase?authSource=%24external&authMechanism=MONGODB-X509"
  );
};
