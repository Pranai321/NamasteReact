const RestaurantCard = (props)=>{
    const rescard = props.rescard;
    return (
    <div className="Restaurant-card">
        <img className="restaurant-logo" src ={rescard.image}/>
        <h3 className="res-details">{rescard.name}</h3>
        <h3 className="res-details">{rescard.cuisines}</h3>
        <h3 className="res-details">{rescard.rating}</h3> 
        <h3 className="res-details">{rescard.eta}</h3>

    </div>
   
    )
}

export default RestaurantCard;