const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add the user name"],
      unique:[true,"please add unique email"],
    },
    email: {
      type: String,
      required: [true, "Please add the user email"],
      unique: [true, "email address already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add the user password"],
      // minlength : [8, "Password must be at least 8 characters long"],
      // select : false,
    },
  },
  {
    Timestamps: true,
  }
);

module.exports = mongoose.model("User",userSchema);