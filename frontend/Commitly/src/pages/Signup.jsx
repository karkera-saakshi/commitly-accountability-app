import { useState } from "react";
import { Link } from "react-router-dom";
const Signup = () =>{
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    return (
   <div>
      <h1>Commitly</h1>
      <p>Welcome to Commitly!</p>
      <p>Want to manage team efficiently? Commitly has you covered! Join now !</p>
      <div>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username"/> <br />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email"/> <br />
        <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Enter Password"/> <br />
        <button>Submit</button> <br />
        <Link to="/">Already have an account?</Link>
      </div>
    </div>
    )
}
export default Signup;