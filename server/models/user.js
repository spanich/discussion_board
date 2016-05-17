var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	name: String,
	topics: [{type: Schema.Type.ObjectId, ref: 'Topic'}],
	created_at: {type: Date, default: Date.now}
});

mongoose.model('User', UserSchema);