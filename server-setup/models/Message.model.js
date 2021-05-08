
const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const messageSchema = new Schema({
  message: {
    type: String,
    minLength: 1,
  }
},
{ timestamps: true },
);

const Message = model("Message", messageSchema);

module.exports = Message;
