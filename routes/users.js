var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://somethingreallyyaar:passwordhipasswordhai@kuchbhi.lelra0v.mongodb.net/?retryWrites=true&w=majority');

const userSchema = mongoose.Schema({
  email: String,
  name: String
})

module.exports = mongoose.model('users',userSchema);
