    import Schimmer from "./Schimmer";
    import  {useParams} from "react-router-dom";
    import useRestaurantMenu from "../utils/useRestaurantMenu";
    const RestaurantMenu = ()=>{

        const {resId} = useParams();
        const resMenu = useRestaurantMenu(resId);
        console.log(resMenu);
        if(resMenu.length == 0){
            <h1>Empty</h1>
        }
        const items = resMenu.menu;
        console.log(items);
        return <div>
            <div className = "mb-4">
                <h1 className = " m-2 text-2xl font-bold">{resMenu?.name}</h1>
                <h2><i className = "m-2  font-bold">{resMenu.cuisines}</i></h2>
            </div>
            <div className = "menu">
                <h2 className = "m-2 font-semibold text-gray-800" >Recommendations</h2>
                 {items?.map(
                    (item)=>(
                         <div className="menuItem-container">
                            <h2 className = "m-2 font-semibold">{item.name+"-"+item.price}</h2>
                        </div>
                    )
                )}
            </div>
            
        </div>
    } 

    export default RestaurantMenu;