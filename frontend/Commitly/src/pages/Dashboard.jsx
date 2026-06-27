import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

let Dashboard = () =>{
    
    return (
   <div>
      <Sidebar/>
      <Main/>
      <h1>This is dashboard</h1>
    </div>
    )
}
export default Dashboard;