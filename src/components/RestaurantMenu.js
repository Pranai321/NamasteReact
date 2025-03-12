    import Schimmer from "./Schimmer";
    import  {useParams} from "react-router-dom";
    import useRestaurantMenu from "../utils/useRestaurantMenu";
    import RestaurantCategory from "./RestauarantCategory";
    import {useState} from "react";
    const RestaurantMenu = ()=>{

        const {resId} = useParams();
        const resMenu = useRestaurantMenu(resId);
        
        const [showIndex , setShowIndex] = useState(0);
        if(resMenu.length == 0){
            return 
            <Schimmer/>
        }
        
        const categories = resMenu.menu;
        return <div className = "flex flex-col items-center">
            <div className = "text-center">
                <h1 className = "text-2xl font-bold my-2">{resMenu?.name}</h1>
                <h2 className = "text-lg my-2 font-semibold" ><i>{resMenu?.cuisines}</i></h2>
            </div>
            <div className = "flex flex-col items-center">
                {categories.map((item,index)=>{
                    return <RestaurantCategory 
                    key = {item.category} 
                    litem={item}
                    showItem = {index == showIndex}
                    setShowItem = {()=>{
                        if(index ==showIndex){
                            setShowIndex(null); //if we press on the category that is already expanded, it gets closed
                        }else{
                            setShowIndex(index)}
                        }
                    }
                        
                    />
                })}
            </div>
            
        </div>
    } 

    export default RestaurantMenu;