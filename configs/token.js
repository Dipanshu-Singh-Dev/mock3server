const jwt = require('jsonwebtoken')
const getToken = (id) => jwt.sign({ id }, process.env.secret);

const checkToken = (req,res,next)=> {
    jwt.verify(req.body.token, process.env.secret,(err,decoded)=>{
        if(err)res.send("Unable to verify token");
        else{
            req.body.id = decoded.id;
            next()
        }
    });
};
module.exports = {getToken,checkToken}