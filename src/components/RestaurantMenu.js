    import Schimmer from "./Schimmer";
    import  {useParams} from "react-router-dom";
    import useRestaurantMenu from "../utils/useRestaurantMenu";
    const RestaurantMenu = ()=>{

        const {resId} = useParams(); 
        resMenu = useRestaurantMenu(resId);
        if(resMenu.length == 0){
            <Schimmer/>
        }
        return <div>
            <div>
                <h1>{resMenu?.name}</h1>
                <h2><i>{resMenu.cuisines}</i></h2>
            </div>
            <div className = "menu">
                <h2>Recommendations</h2>
                {resMenu?.menu?.map(
                    (item)=>{
                        <div className="menuItem-container">
                            <h2 >{item.name+"-"+item.price}</h2>
                        </div>
                    }
                )}
            </div>
            
        </div>
    } 

    export default RestaurantMenu;