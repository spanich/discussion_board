var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');

module.exports = function() {
	return {
		index: function(req, res) {
			Topic.find({}, function(err, results){
				if (err){
					console.log(err);
				}
				else{
					res.json(results);
				}
			})
		},
		
		addTopic: function(req, res) {
			var new_topic = new Topic(req.body);
			console.log(new_topic);
			new_topic.save(function(err, results){
				if(err){
					console.log(err);
				}
				else{
					res.json(results);
				}
			})

		},
	}
}();