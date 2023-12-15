const router = require("express").Router();
const auth = require('../middlewares/auth')
router.get('/',auth,async(req,res)=>{
    try{
        const {P,i,n} = req.body;
        const I = i / 100;
        const F = Math.round((P * (Math.pow(I + 1, n) - 1)) / I);
        const totalInv = P * n;
        const totalInt = Math.round(F - totalInv);
        res.send({totalInvestment:totalInv,totalInterest:totalInt,maturityValue:F});
    }catch(err){
        console.log(err)
        res.send("Failed")
    }

})
module.exports = router;