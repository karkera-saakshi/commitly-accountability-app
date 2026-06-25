const commitlyModel = require("../models/commitlyModel");
let handleSignup = (req, res) =>{
    commitlyModel.handleSignup(req.body, res);   
}

let handleLogin = (req, res) =>{
    commitlyModel.handleLogin(req.body, res);
}
module.exports = { handleSignup, handleLogin };
