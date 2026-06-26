import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

const Signup = () =>{
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const nav = useNavigate();
    let handleSubmit = () => {
      axios.post("http://localhost:9000/signup", { username, email, pass })
      .then(()=>{
        alert("Signup successful");
        setUsername("");
        setEmail("");
        setPass("");
        nav("/dashboard");
      })
      .catch((e)=>{
        alert("Error: "+e.response.data);
      })
    }
    return (
   <div>
      <h1>Commitly</h1>
      <p>Welcome to Commitly!</p>
      <p>Want to manage team efficiently? Commitly has you covered! Join now !</p>
      <div>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username"/> <br />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email"/> <br />
        <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Enter Password"/> <br />
        <button onClick = {handleSubmit}>Submit</button> <br />
        <Link to="/login">Already have an account?</Link>
      </div>
    </div>
    )
}
export default Signup;