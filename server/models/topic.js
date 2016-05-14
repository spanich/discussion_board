var mongoose = require('mongoose');
var TopicSchema = new mongoose.Schema({
	name: String,
	desc: String,
	Category: String
});

mongoose.model('Topic', TopicSchema);