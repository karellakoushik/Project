const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const domainSchema = new Schema({
  domainname: {
    type: String,
    required: true,
    unique: true,   
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Domain = mongoose.model('Domain', domainSchema);

module.exports = Domain;