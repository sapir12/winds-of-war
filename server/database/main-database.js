'use strict'
var mongoose      = require('../../node_modules/mongoose');
var accountSchema = require('./account-schema.js');
var db            = mongoose.connection;
var Account       = mongoose.model('account',accountSchema);


// Variables /////////////////////////////////////////////////////////////////////


// Defining Functions ////////////////////////////////////////////////////////////
var saveInfo = function(name, email, password) {
	mongoose.connect('mongodb://localhost/winds-of-war');
    new accountSchema({
	    name: name,
	    email: email,
		password: password,
		cards: []
    }).save();
    db.close();
}

var authenticate = function(name, pswd, callback){
	mongoose.connect('mongodb://localhost/winds-of-war');
    Account.find({"name": name},
	    function(err,res){
	    	if (err){
	    		callback(err);
	    		db.close();
	    	}
	    	callback(null,res[0]);
			db.close();
	    }
	);
};


// Calling Functions //////////////////////////////////////////////////////////////
	//saveInfo("arel", "r.l.sapir@gmail.com", "UwiSh!@12");
	/*authenticate("arel", "UwiSh!@12", function(err, res){
		if (err) {throw err};
		console.log("response is:", res);
	});*/

module.exports = {
	saveInfo: saveInfo,
	authenticate: authenticate
}




/* //DONT MIND THE FOLLOWING LINES AT ALL:
db.on('error', console.error);
db.once('open', function() {
  // Create your schemas and models here.
	var movieSchema = new mongoose.Schema({
		title: { type: String }
		, rating: String
		, releaseYear: Number
		, hasCreditCookie: Boolean
	});

	// Compile a 'Movie' model using the movieSchema as the structure.
	// Mongoose also creates a MongoDB collection called 'Movies' for these documents.
	var Movie = mongoose.model('Movie', movieSchema);
});
*/