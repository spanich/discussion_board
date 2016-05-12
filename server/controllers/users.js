var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function() {
	return {
		addUser: function(req, res) {
			var new_user = new User({name: req.body.name});
			console.log(new_user);
			new_user.save(function(err, results){
				if (err){
					console.log(err);
				}
				else{
					res.json(results);
				}
			})
		},
	}
})();