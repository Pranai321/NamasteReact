import {useState,useEffect} from "react";
const useRestaurantMenu = (resId)=>{
     const [resInfo, setResInfo ] = useState([]);
     useEffect(()=>{
        fetchData();
     },[]);
     const fetchData= async()=>{
        const data = await fetch("http://localhost:4000/restaurants/"+resId);
        const json = await data.json();
        setResInfo(json);
     }
     
    return resInfo;
}
export default useRestaurantMenu;