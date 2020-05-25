const mongoose = require("mongoose");
const requiredErrMsg = "{PATH} is required.";

// PATH gets replaced by the key name
const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, requiredErrMsg],
      minlength: [3, "{PATH} must be at least {MINLENGTH} characters"],
    },
    petType: {
      type: String,
      required: [true, requiredErrMsg],
      minlength: [3, "{PATH} must be at least {MINLENGTH} characters"],
    },
    description: {
      type: String,
      required: [true, requiredErrMsg],
      minlength: [3, "{PATH} must be at least {MINLENGTH} characters"],
    },
    skill1: {
      type: String,
      required: [false],
    },
    skill2: {
      type: String,
      required: [false],
    },
    skill3: {
      type: String,
      required: [false],
    },
  },
  { timestamps: true }
);

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;
