import { Link } from "react-router-dom";
import { useState } from "react";
let Login = () =>{
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    return (
   <div>
      <h1>Commitly</h1>
      <p>Welcome to Commitly!</p>
      <p>Want to manage team efficiently? Commitly has you covered! Join now !</p>
      <div>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username"/> <br />
        <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Enter Password"/> <br />
        <button>Submit</button> <br />
        <Link to="/signup">Don't have an account?</Link>
      </div>
    </div>
    )
}
export default Login;