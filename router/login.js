const {Router}=require("express");
const UserModel = require("../schema/user.mode");

const loginRouter = Router()

loginRouter.get("/", async(req,res)=>{
    try {
       
        const user =  await UserModel.find({  });
       
        res.status(200).send(user);
      } catch (error) {
        res.status(401).send(error);
      }
})
loginRouter.post("/",async (req,res)=>{
    try {
        const { name, age, email, password } = req.body;
        const user =  await UserModel.findOne({ name, age, email, password });
       
        res.status(200).send(user);
      } catch (error) {
        res.status(401).send(error);
      }
})
loginRouter.put("/:id",()=>{
    
})
loginRouter.patch("/:id",()=>{
    
})
loginRouter.delete("/:id",()=>{
    
})

module.exports=loginRouter