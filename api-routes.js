//filename: api-routes.js
//initialize express router
let router = require('express').Router();

//set default API response
router.get('/', function (req, res) {
	res.json({
		status:'API Its Working',
		message: 'Welcome to NODEJSMONGOD Crafted with art!',
		});
	});

//import contact controller
var contactController = require('./contactController');

//contact routes
router.route('/contacts')
	.get(contactController.index)
	.post(contactController.new);

router.route('/contacts/:contact_id')
	.get(contactController.view)
	.patch(contactController.update)
	.put(contactController.update)
	.delete(contactController.delete);

//export API routes
module.exports = router;
