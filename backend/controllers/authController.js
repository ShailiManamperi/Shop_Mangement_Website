import User from "../models/User.js";

import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import Users from "../routes/users.js";
//const User = require("../models/User.js");


//user registration
export const register = async (req,res) =>{
    try{

        // hashing password
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password,salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            role: req.body.role
        })

        await newUser.save();

        res.status(200).json({success:true,message:"Sucessfully saved...."})

    }catch (err){

        res.status(500).json({success:false,message:"Failed to created...."})

    }

};

//user login
export const login = async (req,res) =>{
    const email = req.body.email
    //console.log(email)

    try{
        const user = await User.findOne({email})
        //console.log(user)

        //if user doesn't exist
        if(!user){
            return res.status(404).json({success:false,message:"User not found"})
        }

        //if user is exists then check the password
        const checkCorrectPassword = bcrypt.compare(req.body.password , user.password);


        //if password incorrect
        if(!checkCorrectPassword){
            return res.status(401).json({success:false,message:"Incorrect password or email"})
        }

        const {password , role, ...rest} = user._doc

        //create jwt token
        const token = jwt.sign(
            {id:user._id, role:user.role},
            process.env.JWT_SECRET_KEY ,
            {expiresIn: '15d'}
        );

        //console.log(token)

        //set token in the browser cookies and send the responsive to the client
        // res.cookies('accessToken',token,{
        //     httpOnly: true,
        //     expires:token.expiresIn
        // }).status(200).json({
        //     success:true,
        //     message:'sucefully login',
        //     data:{ ...rest}
        // })
        res.cookie('accessToken', token, {
            httpOnly: true,
            expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000) // 15 days
        }).status(200).json({
            success: true,
            message: 'Successfully logged in',
            data: { ...rest }
        });


    }catch (err){
        console.log(err)
        return res.status(500).json({success:false,message:"Failed to login."})
    }

};