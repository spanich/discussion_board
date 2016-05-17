var mongoose = require('mongoose');
var TopicSchema = new mongoose.Schema({
	name: String,
	desc: String,
	category: String,
	user: {type: Schema.Types.ObjectId, ref: 'User'},
	posts: Number
});

mongoose.model('Topic', TopicSchema);