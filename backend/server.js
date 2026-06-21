const express = require("express");
const cors = require("cors");
let app = express();
app.use(cors());
app.use(express.json());
app.use("/",commitlyRoutes);
app.listen(9000, () =>{console.log("Server is running on port 9000")})