module.exports = function(app){

	//home route
	var home = require('../app/controllers/home');
	app.get('/', home.index);
    app.post('/save',home.save);

};
