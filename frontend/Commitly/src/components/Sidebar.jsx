import { useNavigate } from "react-router-dom";
let Sidebar = () =>{
    const nav = useNavigate();
    let handleClick = () =>
    {
        nav("/create")
    }
    return (
   <div>
      <span>Commitly</span> <br />
      <button>View Team</button> <br />
      <button onClick={handleClick}>Create Team</button>
    </div>
    )
}
export default Sidebar;