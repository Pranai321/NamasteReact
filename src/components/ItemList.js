import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList =(props)=>{
    const dispatch = useDispatch();
    const items = props.items;
    return<div className = "p-3">
        {items.map((item)=>{ 
           return <div key = {item.name} className="mb-4 border-b-2 border-b-gray-300 pb-2">
                <div>
                    <span className="text-lg">{item.name} - ₹{item.price}</span>
                </div> 
                    <div className = "flex justify-between">
                        <span>| serving {item.serving} | {item.description}</span>
                        <div>
                            <button className="pr-2" onClick={()=>{dispatch(removeItem(item))}}>- </button>
                        <button onClick ={()=>
                                            {
                                                dispatch(addItem(item));
                                            }}>
                             Add+ </button>
                        </div>
                        
                    </div>
            </div>
        })}
    </div>
    
}
export default ItemList;