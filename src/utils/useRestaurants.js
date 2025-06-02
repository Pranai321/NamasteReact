import{useState, useEffect} from "react";
const useRestaurants= ()=>{
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const data = await fetch("http://localhost:3000/restaurants");
        const json = await data.json();
        setListOfRestaurants(json);
        setFilteredRestaurants(json);
    }
    return [listOfRestaurants, setListOfRestaurants, filteredRestaurants, setFilteredRestaurants];
}
export default useRestaurants;