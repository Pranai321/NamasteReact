const ItemList =(props)=>{
    items = props.items;
    return<div className = "p-3">
        {items.map((item)=>{
           return <div key = {item.name} className="mb-4 border-b-2 border-b-gray-300 pb-2">
                <div>
                    <span className="text-lg">{item.name} - ₹{item.price}</span>
                </div>
                    <span>| serving {item.serving} |</span>
                    <span>{item.description}</span>

            </div>
        })}
    </div>
}
export default ItemList;