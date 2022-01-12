const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://kamal:kamal@awscluster.ummcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
};
