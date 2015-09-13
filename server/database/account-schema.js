var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
 
var accountSchema = new Schema({
	name: String,
    email: String,
    password: String,
    cards: Array
});
 

module.exports = mongoose.model('account', accountSchema);