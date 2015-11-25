var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  email: String,
  photoUrl: String,
  provider: String,
  providerId: String
});

mongoose.model('User', UserSchema);

