const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  field: {
    type: String,
  },
  phonenumber: {
    type: String,
  },
  address: {
    type: String,
  },
  ssn: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('profile', ProfileSchema);
