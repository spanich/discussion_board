var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function() {
	return {
		index: function(req, res) {
			User.find({}, function(err, results){
				if (err){
					console.log(err);
				}
				else{
					res.json(results);
				}
			})
		},

		addUser: function(req, res) {
			//initial version, functional
			// var new_user = new User({name: req.body.name});
			// console.log(new_user);
			// //find user
			// console.log(new_user);
			// new_user.save(new_user);
			// 	res.json(new_user)

			User.findOne({name: req.body.name}, function(err, result){
				console.log("localizing the error", result);
				if (result==null){
					var user = User({name:req.body.name});
					user.save(function(err, result){
						if(err){
							console.log(err)
						}
						else{
							res.json(result)
						}
					})
				}
				else{
					res.json(results);
				}
			})

		}
	}
}();