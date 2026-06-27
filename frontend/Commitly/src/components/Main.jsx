import { useNavigate } from "react-router-dom";
import axios from "axios";
let Main = () =>{
    axios.get("http://localhost:9000/myTeam")
    return (
   <div>
      <div>
        <h3>Title: </h3>
        <p>Leader: </p>
      </div>
    </div>
    )
}
export default Main;