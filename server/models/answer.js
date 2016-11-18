var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var answerSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: [5, 'You really think you can post a good answer in less than 5 chars??'],
    required: [true, 'Answer is required to post!']
  },
  details: {
    type: String,
    default: 'none'
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  _question: {
    type: Schema.Types.ObjectId,
    ref: 'Question'
  },
  likes: {
    type: Number
  },
}, {
  timestamps: true
})

mongoose.model('Answer', answerSchema);
