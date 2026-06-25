const { MongoClient } = require("mongodb");
let url = process.env.MONGODB_URI;

let handleSignup = (obj, res) =>
{
    if(!obj.email || !obj.pass || !obj.username)
    {
        res.status(400).send("All fields are required");
        return;
    }
    let client = new MongoClient(url);
    client.connect();
    let db = client.db("commitly");
    let coll = db.collection("user");
    coll.findOne({ email: obj.email })
    .then((email) => {
        if(email){
            return res.status(400).send("Email already in use");
        }

        return coll.insertOne(obj)
            .then((result) => res.send(result));
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send("Server Error");
    })
    .finally(() => client.close());
}

let handleLogin = (obj, res) =>
{
    if(!obj.pass || !obj.email)
    {
        res.status(400).send("All fields are required");
        return;
    }
    let client = new MongoClient(url);
    client.connect();
    let db = client.db("commitly");
    let coll = db.collection("user");
    coll.findOne({ email: obj.email, pass: obj.pass })
    .then((user)=>{
        if(!user)
        {
            return res.status(400).send("Account doesnot exist");
        }
        res.send("Login Succesfull");
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send("Server Error");
    })
    .finally(() => client.close());
}
module.exports = { handleSignup, handleLogin};