var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	name: String,
	created_at: {type: Date, default: Date.now}
});

mongoose.model('User', UserSchema);