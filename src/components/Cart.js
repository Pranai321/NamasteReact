import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = ()=>{
    const dispatch = useDispatch();
    const items = useSelector((store)=>{return store.cart.items});
    return <div className = "flex flex-col justify-center items-center m-10">
            <h1 className= "text-2xl font-bold">Cart</h1>
            <h2 className="text-2xl font-bold text-red-600 hover:text-red-800 mt-4" onClick={()=>{dispatch(clearCart())}}>Clear</h2>
            <h3>{items.length===0 && (<h1> Cart is Empty!</h1>)}</h3>
            <div className= "w-180">
                <ItemList items = {items}/>
            </div>
        </div>
}

export default Cart;