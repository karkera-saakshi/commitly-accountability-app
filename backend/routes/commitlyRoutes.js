let express = require("express");
let router = express.Router();
const commitlyController = require("../controllers/commitlyController");
router.post("/signup", commitlyController.handleSignup);
router.post("/login", commitlyController.handleLogin);
router.post("/team", commitlyController.handleTeam);
module.exports = router;