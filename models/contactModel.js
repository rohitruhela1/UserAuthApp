const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please add the contact name "],
    },
    email: {
      type: String,
      required: [true, "Please add the contact email "],
      // unique:true,
      // match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please add a valid email address "]
    },
    phone: {
      type: String,
      required: [true, "Please add the contact phone number "],
      // unique:true,
      // match: [/^\d{10}$/, "Please add a valid 10 digit phone number "]
    },
  },
  {
    Timestamp: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
