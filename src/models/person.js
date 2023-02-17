const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://mongodb/company');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

schema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();

    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Person', schema);
