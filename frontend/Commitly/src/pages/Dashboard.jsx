import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

let Dashboard = () =>{
    
    return (
   <div>
      <Sidebar/>
      <h1>This is dashboard</h1>
    </div>
    )
}
export default Dashboard;