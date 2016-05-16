var mongoose = require('mongoose');
var TopicSchema = new mongoose.Schema({
	name: String,
	desc: String,
	category: String,
	username: String,
	posts: Number,
});

mongoose.model('Topic', TopicSchema);