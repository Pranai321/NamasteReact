import {app_logo} from "../utils/constants";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header =()=>{
    const [log, setLog] = useState("Logout");
    useEffect(()=>{
        console.log("useEffectCalled");
    },[log])
    stats = useOnlineStatus();
    let btn = "🔴"
    if(stats){
        btn = "✅"
    }
    return  (
             <div className = "flex justify-between bg-green-100 ">
                 <div className ="w-56">
                     <img className= "logo" src = {app_logo}></img>
                 </div>
                 <div className = "flex items-center">
                    <h2 className ="mr-5 text-lg font-bold">Online Status:{btn}</h2> 
                    <h2 className ="mx-2 px-1 text-lg border-1 rounded-lg font-semibold text-blue-500 hover:bg-blue-300 hover:text-white"><Link to = "/">Home</Link></h2>
                    <h2 className ="mx-2 px-1 text-lg border-1 rounded-lg font-semibold text-blue-500 hover:bg-blue-300 hover:text-white"><Link to = "/about">About us</Link></h2>
                    <h2 className ="mx-2 px-1 text-lg border-1 rounded-lg font-semibold text-blue-500 hover:bg-blue-300 hover:text-white"><Link to = "/contact">Contact us</Link></h2>
                    <h2 className ="mx-2 px-1 text-lg border-1 rounded-lg font-semibold text-blue-500 hover:bg-blue-300 hover:text-white"> <Link to = "/grocery">grocery</Link></h2>                   
                    <h2 className ="mx-2 px-1 text-lg border-1 rounded-lg font-semibold text-blue-500 hover:bg-blue-300 hover:text-white"><Link to = "/cart">Cart</Link></h2>
                    <button className = "mx-2 px-1 text-lg border-1 rounded-lg font-semibold text-blue-500 hover:bg-blue-300 hover:text-white" onClick = {()=>{
                        if(log =="Logout"){
                            setLog("Login");
                        }
                        else{
                            setLog("Logout");
                        }
                    }}>{log}</button>
                 </div>
            </div>
            )
 }

 export default Header;