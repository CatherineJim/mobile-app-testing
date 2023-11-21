const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://<username>:<password>@cluster.mongodb.net/<database-name>",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const userSchema = new mongoose.Schema({
  username: String,
  password: String, // Store hashed/salted passwords
  // Add other user-related fields here
});

const User = mongoose.model("User", userSchema);
