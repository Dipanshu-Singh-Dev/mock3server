const model = require('../models/user');
const router = require('express').Router();
const {getToken} = require('../configs/token')
const {getHash,checkHash} = require('../configs/bcrypt')
const auth = require('../middlewares/auth')
router.post('/register',async(req,res)=>{
    const {email,password} = req.body;
    const hash = getHash(password);
    try{
        await model.create({ email, password: hash });
        res.send("successful")
    }catch(err){
      console.log(err)
        res.send("Failed")
    }
})

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await model.findOne({ email });
    if(!user)res.send("Signup First")
    else {
        const passwordMatch = checkHash(password,user.password)
        if (!passwordMatch) {
          res.send("Wrong password");
        } else {
          const token = getToken(user._id);
          res.send({ message: "Successful", token});
        }
    }
  } catch (err) {
    console.log(err)
    res.send("Failed");
  }
});
router.get('/getprofile',auth,async(req,res)=>{
  const {id} =req.body;
  const user = await model.findById(id)
  res.send(user.email);
})
module.exports = router;