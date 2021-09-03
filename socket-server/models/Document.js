const { Schema, model } = require('mongoose');

const Document = new Schema({
  _id: String,
  data: Object,
  email: String
});

module.exports = model('Document', Document);
