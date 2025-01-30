const RestaurantCard = (props)=>{
    const rescard = props.rescard;
    return (
    <div className= "flex flex-wrap justify-center m-2  w-70 h-90 rounded-lg bg-gray-100 hover:bg-gray-200">
        <img className="h-53 w-70 rounded-lg" src ={rescard.image}/>
        <div className = "flex flex-wrap">
            <h3 className="font-bold py-2">{rescard.name}</h3>
            <h3 className="font-semibold">{rescard.cuisines}</h3>
            <h3 className="">{rescard.rating} ⭐</h3> 
            <h3 className="">{rescard.eta}</h3>
        </div>
        
    </div>
   
    )
}

export default RestaurantCard;