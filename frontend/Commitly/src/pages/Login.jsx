import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
let Login = () =>{
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    let handleSubmit = () =>
    {
      axios.post("http://localhost:9000/login", { email, pass })
      .then(()=>{
        alert("Login successful");
        setEmail("");
        setPass("");
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
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email"/> <br />
        <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Enter Password"/> <br />
        <button onClick={handleSubmit}>Submit</button> <br />
        <Link to="/signup">Don't have an account?</Link>
      </div>
    </div>
    )
}
export default Login;