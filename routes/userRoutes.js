const express = require("express");
const UserModel = require("../models/userModel");
const router = express.Router();
const mongoose = require("mongoose");

// router.get("/", async (req, res)=>{

//     const users =
//         await UserModel.find()

//     res.json({
//         success:true,
//         data: users
//     })
// })

// router.get("/:id", async (req, res)=>{

//     userId = req.params.id
//     const user =
//         await    UserModel.findById(userId);

//     res.json({
//         success:true,
//         data: user
//     });
// });

// Register user
router.post("/register", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json({
      success: true,
      data: user,
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message
    });

  }
});

// Login user
router.post("/login", async (req, res) => {
    /*
     * No llegan datos 
     * Llega email pero no usuario
     * Lega email y usuario pero la contraseña es incorrecta
     *  Todo correcto
     */

    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success:false,
            message: 'The email or the passwor is wrong'
        });
    }else{
        const user = await UserModel.findOne({email}).select("+password");

        if (!user) {
            return res.status(400).json({
                success:false,
                message: 'The email or the passwor is wrong'
            });
        }else{
            
            const isMatch = await user.compararPassword(password);
            if ( isMatch ) {
                return res.status(200).json({
                    success: true,
                    message: "User found",
                    data: user
                });
            }else{
                return res.status(400).json({
                    success:false,
                    message: 'The email or the passwor is wrong'
                });
            }
        }
    }
        
});

// router.post("/", async (req, res)=>{

//     const newUser =
//         await UserModel.create(req.body)

//     res.json({
//         success:true,
//         data: newUser
//     })
// })

// router.put("/:id", async (req, res)=>{

//     const userId = req.params.id
//     const updUser=
//         await UserModel.findByIdAndUpdate(
//             userId,
//             req.body,
//             {
//                 new: true
//             })
//     res.json({
//         success:true,
//         data: updUser
//     })
// })

// router.delete("/:id", (req, res)=>{
//     res.json({
//         success:true,
//         msg:`aqui se eliminara el curso cuyo id es ${req.params.id}`
//     })
// })

// router.delete("/:id", async (req, res)=>{

//     const userId = req.params.id
//     const delUser=
//     await UserModel.findByIdAndDelete(
//         userId
//         )
//     res.json({
//         success:true,
//         data: delUser
//     })
// })

module.exports = router;
