const mongoose = require('mongoose');

const SpeechSchema = new mongoose.Schema({
    UserID: {
        type: String,
        required: true
      },
    Speechname: {
    type: String,
    required: true
  },
  Speech: {
    type: String,
    required: true
  }
});

const Speech = mongoose.model('Speech', SpeechSchema);

module.exports = Speech;
