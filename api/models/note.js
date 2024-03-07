const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    archived: {
        type: Boolean,
        required: true
    }
  });

  module.exports = mongoose.model('note', noteSchema)