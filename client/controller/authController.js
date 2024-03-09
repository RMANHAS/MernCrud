import UserModel from "../Model/UserModel.js";
import dotenv from "dotenv";


export const register=async(req,res)=>{
   
try {
   
    const { name,lastname,email,mobile,project } = req.body;
    

    switch (true) {
        case !name:
          return res.status(200).send({ messaage: "Name is required" });

          case !lastname:
            return res.status(200).send({messaage:"Lastname is required"})
  
        case !email:
          return res.status(200).send({ messaage: "Email is required" });
  
    
        case !mobile:
          return res.status(200).send({ messaage: "Mobile is required" });
  
        case !project:
          return res.status(200).send({ messaage: "project is required" });
      }
 //save user 
      const user=new UserModel({
        name,
        lastname,
        email,
        mobile, 
        project
      })

     await user.save()
     res.status(200).send({
        success:true,
        message:"successfully registered",
        user
     })

} catch (error) {
    res.status(500).send({
        success:false,
        message:"registered not successfully ",
        error
    })
}
}

export const getController=async(req,res)=>{
  try {
    const find=await UserModel.find();
    res.status(200).send({
      success:true,
      message:"find data successfully",
      find
    })
  } catch (error) {
    res.status(500).send({
      success:false,
      message:"error while finding data"
    })
    
  }
}

export const deleteController=async(req,res)=>{
  try {
    const  id = req.params.id;
    // console.log("first")
    // console.log(id)
  await UserModel.findByIdAndDelete({_id:id} );
 
    res.status(200).send({
      success: true,
      message: "deleted successfully",
      
    });

   
  } catch (error) {
    res.status(200).send({
      success: false,
      message: "error while deleting a category....",
    });
  }
}

export const sigleController=async(req,res)=>{
 try {
  const id=req.params.id;
    // console.log("first")
    // console.log(id)
  const single=await UserModel.findById({_id:id});
  // console.log("second")
  //   console.log(id)
  res.status(200).send({
    success:true,
    message:"user details in single controller",
    single
  })
 } catch (error) {
  res.status(500).send({
    success:false,
    message:"can't update ",
    error
  })
 }
}

export const updatecontroller=async(req,res)=>{
 try {
  const id=req.params.id;
  const update = await UserModel.findByIdAndUpdate({_id:id},{
    $set:{
      name:req.body.name,
      lastname:req.body.lastname,
      email:req.body.email,
      mobile:req.body.mobile,
      project:req.body.project
    },
    new:true,
  });
  res.status(200).send({
    success:true,
    message:"update successfully",
    update
  })
 } catch (error) {
  res.status(200).send({
    success:false,
    message:"cannot update successfully",
    error
  })
 }

}