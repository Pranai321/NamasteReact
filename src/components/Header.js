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
             <div className = "Header-container">
                 <div className ="logo-container">
                     <img className= "logo" src = {app_logo}></img>
                 </div>
                 <div className = "Nav-items">
                    <h2 className="Nav-item">Online Status:{btn}</h2> 
                    <h2 className="Nav-item"><Link to = "/">Home</Link></h2>
                    <h2 className="Nav-item"><Link to = "/about">About us</Link></h2>
                    <h2 className="Nav-item"><Link to = "/contact">Contact us</Link></h2>
                    <h2 className ="Nav-item"> 
                        <Link to = "/grocery">
                            grocery
                        </Link>  
                    </h2>
                    <h2 className="Nav-item"><Link to = "/cart">Cart</Link></h2>
                    <button className = "Login" onClick = {()=>{
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