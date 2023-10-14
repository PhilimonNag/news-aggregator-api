const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const { json } = require("express");
const jwt = require("jsonwebtoken");
const signUp = async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body;
    const newUser = new userModel({
      fullName,
      email,
      password: bcrypt.hashSync(password, 10),
      role,
    });
    await newUser.save();
    res.status(200).send({ message: "User Created", newUser });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
const signIn = async (req, res) => {
  try {
    if (!req.body.hasOwnProperty("email")) {
      res.status(400).send({ message: "Email is required" });
    } else if (!req.body.hasOwnProperty("password")) {
      res.status(400).send({ message: "Password is required" });
    } else {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email });
      if (user) {
        const verify = await bcrypt.compare(password, user.password);
        if (verify) {
          const token = jwt.sign({ payload: user.id }, process.env.JWT_SECRET, {
            expiresIn: "15m",
          });
          user.password = undefined;
          res.status(200).send({
            message: "Loging Successfully",
            accessToken: token,
            data: user,
          });
        } else {
          res.status(401).send({ message: "Email and Password not matched" });
        }
      } else {
        res.status(400).send({ message: "Email and Password not matched" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error });
  }
};

module.exports = { signUp, signIn };
