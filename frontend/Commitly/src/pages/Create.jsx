import { useState } from "react";
import { useNavigate } from "react-router-dom";
let Create = () =>{
    let [num , setNum] = useState("");
    let [mem , setMem] = useState([]);
    let handleInput = () =>
    {
        const newArray = Array.from({ length: num }); 
        setMem(newArray)
        // setMem = new Array(num).fill("")
        console.log(mem);
        
    }
    return (
   <div>
      <input type="number" name="num" id="" placeholder="Enter the numebr of team you will work with" onChange={(e) => setNum(e.target.value)} value={num}/>
      <button onClick={handleInput}>Enter</button>
      <button>Add</button>
      {mem.map((slot, index)=>{
            return (
                <div>
                <input type="text" placeholder="Enter email"/>
                </div>
            )
        })}
    </div>
    )
}
export default Create;