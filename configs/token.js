const jwt = require('jsonwebtoken')
const getToken = (id) => jwt.sign({ id }, process.env.secret);

module.exports = {getToken}