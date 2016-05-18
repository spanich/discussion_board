var mongoose = require('mongoose');
var Schema = mongoose.Schema

var UserSchema = new mongoose.Schema({
	name: String,
	topics: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
	created_at: {type: Date, default: Date.now}
});

mongoose.model('User', UserSchema);