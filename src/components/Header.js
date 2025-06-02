import {app_logo} from "../utils/constants";
import { useEffect, useState, useContext } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext.js"; 
import {useSelector} from "react-redux";
const Header =()=>{
    const [log, setLog] = useState("Logout");
    useEffect(()=>{
        console.log("useEffectCalled");
    },[log])
    stats = useOnlineStatus();
    let btn = "🔴"
    if(stats){
        btn = "🟢"
    }
    const data = useContext(UserContext);
    const cartItems = useSelector((store)=>{
        return store.cart.items;
    })
    console.log(cartItems);
    return  (
             <div className = "flex justify-between bg-green-100 ">
                 <div className ="w-40">
                     <img className= "logo" src = {app_logo}></img>
                 </div>
                 <div className = "flex items-center">
                    <h2 className ="mr-5 text-lg font-semibold">Online Status:{btn}</h2> 
                    <h2 className ="mx-2 px-1 text-lg font-medium text-blue-500"><Link to = "/">Home</Link></h2>
                    <h2 className ="mx-2 px-1 text-lg  font-medium text-blue-500"><Link to = "/about">About us</Link></h2>
                    <h2 className ="mx-2 px-1 text-lg  font-medium text-blue-500"><Link to = "/contact">Contact us</Link></h2>
                    <h2 className ="mx-2 px-1 text-lg  font-medium text-blue-500 "> <Link to = "/grocery">grocery</Link></h2>                   
                    <h2 className ="mx-2 px-1 text-lg  font-medium text-blue-500 "><Link to = "/cart">Cart({cartItems.length})</Link></h2>
                    <button className = "mx-2 px-1 text-lg  font-medium text-blue-500"
                    onClick = {()=>{
                        log =="Logout"? setLog("Login"): setLog("Logout")
                    }}>{log}</button>
                    <button className="font-medium">{data.loggedInUser}</button> 
                 </div>
            </div>
            )
 }

 export default Header;