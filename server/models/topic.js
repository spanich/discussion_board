var mongoose = require('mongoose');
var Schema =  mongoose.Schema
// console.log("testing", Schema);

var TopicSchema = new mongoose.Schema({
	name: String,
	username: String,
	desc: String,
	category: String,
	// _user: {type: Schema.Types.ObjectId, ref: 'User'},
	// posts: Number
});

mongoose.model('Topic', TopicSchema);