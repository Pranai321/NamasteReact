const express = require("express");
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

// Restaurant data: Array of objects
const restaurants =  [
    {
        id: 1,
        name: "KFC",
        cuisines: "Burgers, Biryani, American Snacks, Fast Food",
        rating: 3.8,
        eta: "36 minutes",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJTe1tpFV1pM7j2HkblyNt7jLXSv1I4wYKkAjT7egdiyUkMbKUjBVkKdPk04mzeREDNUI&usqp=CAU"
        ,promoted: true
    },
    {
        id: 2,
        name: "Pizza Hut",
        cuisines: "Pizzas, Italian, Beverages",
        rating: 4.2,
        eta: "30 minutes",
        image: "https://media.gettyimages.com/id/833378306/photo/generic-shots-of-a-pizza-from-pizza-hut-with-a-pizza-cutter.jpg?s=612x612&w=gi&k=20&c=_h3ggdppcsZFgqcNbP8TPWjohQzVe7b6rXABke4GkqM=",
    },
    {
        id: 3,
        name: "Subway",
        cuisines: "Healthy, Sandwiches, Salads",
        rating: 4.0,
        eta: "25 minutes",
        image: "https://media.timeout.com/images/105757031/image.jpg",
        promoted: false
    },
    {
        id: 4,
        name: "Burger King",
        cuisines: "Burgers, Fast Food, American",
        rating: 3.9,
        eta: "35 minutes",
        image: "https://cdn.prod.website-files.com/631b4b4e277091ef01450237/65947cd2a2c28c35b5ca6fb1_Whopper%20w%20Cheese.png",
        promoted: false
    },
    {
        id: 5,
        name: "Domino's Pizza",
        cuisines: "Pizzas, Italian, Fast Food",
        rating: 4.1,
        eta: "28 minutes",
        image: "https://www.dominos.com/static/1.105.0/images/tiles/mixAndMatchDeal/hero.webp",
        promoted: false
    },
    {
        id: 6,
        name: "McDonald's",
        cuisines: "Burgers, Fries, Shakes, Fast Food",
        rating: 4.3,
        eta: "20 minutes",
        image: "https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=90/media/photosV2/f6a32d05-c463-496a-82fd-1b734bd9d069-retina-large.jpg",
        promoted: false
    },
    {
        id: 7,
        name: "Taco Bell",
        cuisines: "Mexican, Tacos, Burritos",
        rating: 4.0,
        eta: "27 minutes",
        image: "https://www.tacobell.com/images/27268_luxe_cravings_box_ft_90s_gordita_supreme_269x269.jpg",
        promoted: false
    },
    {
        id: 8,
        name: "Starbucks",
        cuisines: "Coffee, Bakery, Desserts",
        rating: 4.5,
        eta: "15 minutes",
        image: "https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk4NTAwOTQ0MjkwMjYwOTAz/starbucks-frappuccino-flavors.jpg",
        promoted: false
    },
    {
        id: 9,
        name: "Haldiram's",
        cuisines: "Indian Snacks, Street Food, Sweets",
        rating: 4.2,
        eta: "40 minutes",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMDyAgKe_oLxgN8eAnj4PHhbj_3NWqhy2rVw&s",
        promoted: false
    },
    {
        id: 10,
        name: "Barbeque Nation",
        cuisines: "Indian, Barbecue, Buffets",
        rating: 4.3,
        eta: "50 minutes",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/81/fe/5b/barbeque-nation.jpg?w=700&h=-1&s=1",
        promoted: false
    },
    {
        id: 11,
        name: "Baskin Robbins",
        cuisines: "Ice Creams, Desserts",
        rating: 4.4,
        eta: "10 minutes",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgHfhRvg2skbEtuLfbSP4s8B7_iQaMFjevIw&s",
        promoted: true
    },
];

// Route to get all restaurants
app.get("/restaurants", (req, res) => {
    res.json(restaurants);
});

// Default route
app.get("/", (req, res) => {
    res.send("Welcome to the Restaurant API!");
});



// Route to get a restaurant by ID
app.get("/restaurants/:id", (req, res) => {
    const id = parseInt(req.params.id); // Get ID from request params
    const restaurant = restaurants.find(r => r.id === id);

    if (restaurant) {
        res.json(restaurant);
    } else {
        res.status(404).json({ message: "Restaurant not found" });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

class Parent{
    constructor(name){
        this.name = name;
    };
}
class Child extends Parent{
    constructor(name){
        super(name);
        this.name = name;
    }
}
const guy = new Child();

