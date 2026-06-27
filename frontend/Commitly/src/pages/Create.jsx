import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
let Create = () =>{
    let [num , setNum] = useState("");
    let [mem , setMem] = useState([]);
    let [team , setTeam] = useState("");
    let [email , setEmail] = useState([]);
    let handleInput = () =>
    {
        const newArray = Array.from({ length: num }); 
        const newEmail = Array.from({ length: num }).fill("");
        setEmail(newEmail);
        setMem(newArray);
    }
    let handleTeam = () =>
    {
        if(!team || !num)
        {
            alert("Enter all feilds");
            return;
        }
        let seen = new Set();
        for(const mail of email)
        {
            if(seen.has(mail))
            {
                alert("You cannot add same email again");
                return;
            }
            if(mail.trim() === "")
            {
                alert("You cannot add empty email");
                return;
            }
            seen.add(mail)
        }
        axios.post("http://localhost:9000/team", { team, num, email })
        .then(()=> {
            alert("Team sucessfully created");
            setTeam("");
            setNum("");
            setEmail([]);
            setMem([]);
        })
        .catch((e)=> alert("Error: "+e.response.data))
    }
    return (
   <div>
      <input type="text" name="text" id="" placeholder="Enter name of team" onChange={(e) => setTeam(e.target.value)} value={team}/> <br />
      <input type="number" name="num" id="" placeholder="Enter the numebr of team you will work with" onChange={(e) => setNum(e.target.value)} value={num}/>
      <button onClick={handleInput}>Enter</button>
      <button onClick={handleTeam}>Add</button>
      {mem.map((slot, index)=>{
            return (
                <div>
                <input 
                    type="text" 
                    placeholder="Enter email" 
                    onChange={(e) => {
                        let updatedEmail = [...email]
                        updatedEmail[index] = e.target.value;
                        setEmail(updatedEmail)
                    }} 
                    value={email[index] || ""}/>
                </div>
            )
        })}
    </div>
    )
}
export default Create;