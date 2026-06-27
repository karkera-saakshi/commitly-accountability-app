const commitlyModel = require("../models/commitlyModel");
let handleSignup = (req, res) =>{
    commitlyModel.handleSignup(req.body, res);   
}

let handleLogin = (req, res) =>{
    commitlyModel.handleLogin(req.body, res);
}

let handleTeam = (req, res) => {
    commitlyModel.handleTeam(req.body, res);
}

let viewTeam = () => {

}

module.exports = { handleSignup, handleLogin, handleTeam, viewTeam };
