const jwt = require("jsonwebtoken");
module.exports = (req,res,next)=>{
    const [, token] = req.headers.authorization.split(" ");
    jwt.verify(token, process.env.secret, (err, decoded) => {
      if (err) res.send("Unable to verify token");
      else {
        req.body.id = decoded.id;
        next();
      }
    });
}