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
			var new_user = new User({name: req.body.name});
			console.log(new_user);
			//find user
			console.log(new_user);
			new_user.save(new_user);
				res.json({message: 'success'})

			// User.findOne({name: req.body.name} function(err, results){
			// 	console.log(results);
			// 	if (err){
			// 		new_user.save(new_user);
			// 		 res.json({message: 'success'})
			// 	}
			// 	else{
			// 		res.json(results);
			// 	}
			// })

		},
	}
}();