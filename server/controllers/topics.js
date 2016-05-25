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
			// console.log(req.body, "Something unique");
			var new_topic = new Topic(req.body);
			console.log("topic passing!", new_topic);
			new_topic.save(function(err, results){
				if(err){
					console.log(err);
				}
				else{
					res.json(results);
				}
			})

		},

		alltopics: function(req, res) {
			Topic.find({}, function(err, results){
				console.log(results, "coming from BE controller");
				if(err){
					console.log("error retrieving data");
				}
				else{
					res.json(results);
				}
			})
		},
	}
}();