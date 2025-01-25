import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import Schimmer from "./Schimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body =()=>{

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredrestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const arr = [1,2,3,4,5,6,7,8,9,10,12];

    useEffect(()=>{
        fetchData(); 
    },[] );

    const fetchData = async ()=>{
        const data = await fetch("http://localhost:3000/restaurants");
        const resdata =  await data.json();
        setListOfRestaurants(resdata);
        setFilteredRestaurants(resdata);
    };
     const stats = useOnlineStatus();
     if(stats == false){
        return  <h1>Your internet is not connnected, try reconnecting!</h1>
     }
    if(listOfRestaurants.length ===0){
        return <div className= "schimmers">
            {arr.map((val)=>
                <Schimmer key = {val}/>
            )}
            
        </div>
    }
    return(
        <div>
            <input type = "text"
                className = "search"
                value = {searchText}
                onChange = {(e)=>{
                    setSearchText(e.target.value);
                    console.log(e.target.value);
                }}
                />
            <button className = "searchButton"
                    onClick={()=>{
                        const searches = listOfRestaurants.filter((res)=>{
                        //    return res.name === searchText;
                        
                            return res.name.toLowerCase().includes(searchText.toLowerCase()); 
                        //gives all the restauarant in which the the keyword in present
                        });
                        setFilteredRestaurants(searches);
                        
                    }}>

            Submit</button>
           <button className = "btn" onClick = {()=>
            {
                const newcard = listOfRestaurants.filter(
                    (res)=> res.rating>4
            );
            setFilteredRestaurants(newcard);
            }
           }>
            Top rated restaurants
           </button>
            <div className="cards-container">
                 {filteredrestaurants.map((restaurant) =>
                     <Link to = {"/restaurants"+"/"+restaurant.id} key = {restaurant.id}>
                        <RestaurantCard  rescard ={restaurant}/>
                     </Link>
                 )}
                 
            </div>
        </div>
        
    )
}

export default Body;

