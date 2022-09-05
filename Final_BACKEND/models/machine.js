const mongoose = require("mongoose");

const MachineSchema = new mongoose.Schema({
  MachineId: {
    type: String,
    required: true,
    trim: true
  },
  MachineNumber: {
    type: String,
    required: true,
    trim: true
  },
  MachineName: {
    type: String,
    required: true,
    trim: true
  },
  MachineEmail: {
    type: String,
    required: true,
    trim: true
  },
  Status: {
    type: String,
    trim: true,
    default: "offline"
  },
  domain: {
    type: Array,
    default: []
  }
});

const Machine = mongoose.model("Machine", MachineSchema);

module.exports = Machine;