var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new mongoose.Schema({
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    minlength: 10,
    required: [true, 'Question must have a title']
  },
  description: {
    type: String,
    default: 'None'
  },
  answers: [{
    type: Schema.Types.ObjectId,
    ref: 'Answer'
  }]
}, {
  timestamps: true
})

mongoose.model('Question', questionSchema)
