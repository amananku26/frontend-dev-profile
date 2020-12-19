const bcrypt = require("bcryptjs");
const express = require("express");
const { ValidateRegister, ValidateLogin } = require("../validation");
const User = require("../models/User");
const { v4: uuidv4 } = require('uuid');
const jwt = require("jsonwebtoken")


const maxAge = 60 * 60
const createToken = (id) => {
    return jwt.sign({id},'get in',{
        expiresIn:maxAge
    })    
}


const addUsers = async (req, res, next) => {
  const { error } = ValidateRegister(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  }

  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) {
    return res.status(400).send("Email already exists in the database");
  }

  const hashedPassword = await bcrypt.hash(
    req.body.password,
    await bcrypt.genSalt(10)
  );
  const user = new User({
    id:   uuidv4(),
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    const token  = createToken(savedUser._id)
    res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge})
    res.send({savedUser:savedUser._id});
  } catch (err) {
    res.status(400).send(err);
  }
};


const loginUser = async (req, res, next) => {
  const { error } = ValidateLogin(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send("Email or password is wrong");
  }

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid password");
  res.send("logged in");
};

module.exports = { addUsers, loginUser };