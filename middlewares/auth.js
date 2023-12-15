const { checkToken } = require("../configs/token")

module.exports = (req,res,next)=>{
    checkToken(req,res,next);
}