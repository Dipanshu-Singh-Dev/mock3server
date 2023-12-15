const {model,Schema} = require('mongoose');
const schema = Schema({
  email: { type: String, required: true,unique:true },
  password: { type: String, required: true },
});
module.exports = model('user',schema)