import {useState,useEffect} from "react";
const useRestaurantMenu = (resId)=>{
     const [resMenu, setResMenu ] = useState([]);
     useEffect(()=>{
        fetchData();
     },[]);
     const fetchData= async()=>{
        const data = await fetch("http://localhost:4000/restaurants/"+resId);
        const json = await data.json();
        setResMenu(json);
     }
    return resMenu;
}
export default useRestaurantMenu;