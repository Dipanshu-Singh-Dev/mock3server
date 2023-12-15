const bcrypt = require("bcrypt");
const getHash = (plain)=>{
    return bcrypt.hashSync(plain,3)
}
const checkHash = (plain,hash)=>{
    return bcrypt.compareSync(plain, hash);
}
module.exports = {getHash,checkHash}