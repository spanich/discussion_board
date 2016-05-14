var users = require('./../controllers/users.js');
var topics = require('./../controllers/topics.js');

	module.exports = function(app) {
		app.get('/', function(req, res){
			users.index(req, res);
		});
		app.post('/users', function(req, res){
			users.addUser(req, res);
		});
		app.get('/topics', function(req, res){
			topics.index(req, res);
		});
		app.post('/topics', function(req, res){
			topics.addTopic(req, res);
		});
		// app.post('/adduser', function(req, res){
		// 	users.addUser(req, res);
		// })
		// app.get('/orders', function(req, res){
		// 	// console.log(res.body);
		// 	orders.index(req, res);
		// })
		// app.post('/orders', function(req, res){
		// 	console.log("OMG!!!");
		// 	console.log(req.body.prod);
		// 	orders.addorder(req, res);
		// })
		// app.post('/products', function(req, res){
		// 	products.addproduct(req, res);
		// 	//prior addproduct refers to backend controller method that is being called
		// })
		// app.get('/products', function(req, res){
		// 	products.index(req, res);
		// })
	}