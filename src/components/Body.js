import RestaurantCard, {RestaurantCardWithLabel} from "./RestaurantCard";
import {useEffect, useState, useContext} from "react";
import Schimmer from "./Schimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurants from '../utils/useRestaurants';
import UserContext from "../utils/UserContext";

const Body =()=>{
    const [searchText, setSearchText] = useState("");
    const arr = [1,2,3,4,5,6,7,8,9,10,12];

    const [listOfRestaurants, setListOfRestaurants, filteredRestaurants, setFilteredRestaurants] = useRestaurants();
    const stats = useOnlineStatus();

    //RestaurantCardWithLabel
    const RestaurantCardPromoted = RestaurantCardWithLabel(RestaurantCard);

    const {setUserName} =useContext(UserContext);
    // console.log(typeof(setUserName));

     if(stats == false) <h1>Your internet is not connnected, try reconnecting!</h1>;
     
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
                className = "m-3 p-3 border-solid border-2 rounded-lg"
                value = {searchText}
                onChange = {(e)=>{
                    setSearchText(e.target.value);
                }}
                />
            <button className = "py-3 px-6 m-4  cursor-pointer bg-green-300 rounded-lg"
                    onClick={()=>{
                        const searches = listOfRestaurants.filter((res)=>{
                        //    return res.name === searchText;
                         //gives all the restauarant in which the the keyword in present
                            return res.name.toLowerCase().includes(searchText.toLowerCase()); 
                       
                        });
                        setFilteredRestaurants(searches);
                        
                    }}>

            Search</button>
           <button className = "m-4 p-3 cursor-pointer bg-gray-300 rounded-lg" onClick = {()=>
            {
                const newcard = listOfRestaurants.filter(
                    (res)=> res.rating>4
            );
            setFilteredRestaurants(newcard);
            } }
           >Top Rated Restaurants </button>
           <input type = "text" className ="border-solid border-2 border-gray-500 rounded-lg p-2" onChange={(e)=>{
                setUserName(e.target.value);
           }}/>
            <div className="flex flex-wrap">
                 {filteredRestaurants.map((restaurant) =>
                    <Link 
                      to = {"/restaurants"+"/"+restaurant.id} 
                      key = {restaurant.id}>
                        {restaurant.promoted == true ?(
                            <RestaurantCardPromoted rescard = {restaurant}/>) :(
                            <RestaurantCard rescard = {restaurant} />)
                        }

                     </Link> 
                )}
                 
            </div>
        </div>
        
    )
}

export default Body;

