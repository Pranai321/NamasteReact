import ItemList from "./ItemList";
import {useState} from "react";


const RestaurantCategory =  ({litem,showItem, setShowItem})=>{
    const handleClick=()=>{ 
        setShowItem();
        console.log("button clicked");

    }

    return <div>
                <div className="bg-gray-100 m-2  shadow-lg rounded-lg w-200 p-2" >
                    <div className = " flex justify-between cursor-pointer " onClick={handleClick}>
                        <h1 className = "font-semibold">
                            {litem.category}({litem?.items?.length})
                        </h1>
                        <span className="pr-2">
                            {"⬇️"}
                        </span>
                    </div>
                    {showItem ==true?  (<ItemList key = {litem.category} items = {litem.items}/>):<></> }
                        
                </div>                
            </div>
}
export default RestaurantCategory;