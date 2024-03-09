import express from 'express'
import { register,getController,deleteController,sigleController,updatecontroller } from '../controller/authController.js'

const router = express.Router();

router.post('/register',register)
router.get("/getdata",getController)
router.delete("/delete/:id",deleteController)
router.get("/get-single-user/:id",sigleController)
router.put("/update/:id",updatecontroller)

export default router;