const express = require("express");
const app = express();
const cors = require('cors');

const port = 4000;
app.use(cors());

// Restaurant data with menus
const restaurants = [
    {
        "id": 1,
        "name": "KFC",
        "cuisines": "Fried Chicken, Fast Food, American",
        "rating": 4.2,
        "eta": "30 minutes",
        "image": "https://logowik.com/content/uploads/images/kfc-chicken-restaurant5325.jpg",
        "menu": [
            {
                "category": "Chicken Buckets",
                "items": [
                    { "name": "8 Pc Hot & Crispy Bucket", "price": 699, "serving": "8 pieces", "description": "Signature KFC fried chicken with a crispy, spicy coating." },
                    { "name": "6 Pc Smoky Grilled Bucket", "price": 649, "serving": "6 pieces", "description": "Juicy, flame-grilled chicken with a smoky BBQ flavor." },
                    { "name": "12 Pc Boneless Strips", "price": 749, "serving": "12 pieces", "description": "Crispy boneless chicken strips, perfect for dipping." },
                    { "name": "6 Pc Chicken Wings", "price": 399, "serving": "6 pieces", "description": "Classic crispy fried chicken wings, full of flavor." },
                    { "name": "Classic Chicken Bucket", "price": 599, "serving": "6 pieces", "description": "Golden, crunchy fried chicken with KFC’s secret seasoning." },
                    { "name": "Family Feast Bucket", "price": 899, "serving": "10 pieces", "description": "A mix of crispy and grilled chicken for the whole family." },
                    { "name": "Ultimate Party Bucket", "price": 1199, "serving": "14 pieces", "description": "Includes fried chicken, wings, and sides for a perfect meal." },
                    { "name": "Zinger Chicken Bucket", "price": 749, "serving": "8 pieces", "description": "Spicy Zinger-style fried chicken for heat lovers." },
                    { "name": "Boneless Chicken Bucket", "price": 799, "serving": "10 pieces", "description": "Tender, boneless fried chicken bites with a crispy coating." },
                    { "name": "Popcorn Chicken Bucket", "price": 349, "serving": "Large", "description": "Bite-sized crispy chicken popcorn for snacking." }
                ]
            },
            {
                "category": "Burgers & Wraps",
                "items": [
                    { "name": "Zinger Burger", "price": 249, "serving": "1 burger", "description": "Crispy chicken fillet with lettuce and mayo in a soft bun." },
                    { "name": "Double Zinger Burger", "price": 399, "serving": "1 burger", "description": "Double crispy fillets with spicy mayo and fresh lettuce." },
                    { "name": "Grilled Chicken Burger", "price": 279, "serving": "1 burger", "description": "Juicy grilled chicken with smoky BBQ sauce." },
                    { "name": "Crispy Veg Burger", "price": 199, "serving": "1 burger", "description": "Crunchy veggie patty with creamy sauce and lettuce." },
                    { "name": "Chicken Twister Wrap", "price": 249, "serving": "1 wrap", "description": "Crispy chicken strips wrapped with lettuce and mayo." },
                    { "name": "Spicy Chicken Wrap", "price": 269, "serving": "1 wrap", "description": "Zesty chicken fillet with spicy chipotle sauce." },
                    { "name": "Grilled BBQ Wrap", "price": 289, "serving": "1 wrap", "description": "Soft tortilla stuffed with BBQ grilled chicken and veggies." },
                    { "name": "Paneer Zinger Burger", "price": 229, "serving": "1 burger", "description": "Crispy paneer patty with fresh lettuce and spicy sauce." },
                    { "name": "Tandoori Chicken Wrap", "price": 279, "serving": "1 wrap", "description": "Indian-style spiced chicken wrapped in a warm tortilla." },
                    { "name": "Crunchy Chicken Burger", "price": 259, "serving": "1 burger", "description": "Extra crispy chicken fillet with cheese and special sauce." }
                ]
            },
            {
                "category": "Fries & Sides",
                "items": [
                    { "name": "French Fries", "price": 99, "serving": "Medium", "description": "Crispy golden fries with KFC's signature seasoning." },
                    { "name": "Cheesy Fries", "price": 129, "serving": "Medium", "description": "Fries topped with rich melted cheese sauce." },
                    { "name": "Onion Rings", "price": 119, "serving": "10 pcs", "description": "Crispy onion rings with a golden-brown crunch." },
                    { "name": "Mashed Potatoes & Gravy", "price": 149, "serving": "Small", "description": "Creamy mashed potatoes with rich brown gravy." },
                    { "name": "Coleslaw", "price": 99, "serving": "Small", "description": "Cool, refreshing coleslaw with a tangy dressing." },
                    { "name": "Garlic Bread", "price": 109, "serving": "4 slices", "description": "Toasted garlic bread with buttery herb topping." },
                    { "name": "Mac & Cheese", "price": 159, "serving": "Small", "description": "Creamy and cheesy macaroni pasta." },
                    { "name": "Corn on the Cob", "price": 119, "serving": "1 cob", "description": "Sweet corn roasted to perfection with butter." },
                    { "name": "Hash Browns", "price": 109, "serving": "2 pcs", "description": "Golden crispy hash browns for a crunchy bite." },
                    { "name": "Chicken Popcorn", "price": 139, "serving": "Medium", "description": "Crispy bite-sized boneless chicken popcorn." }
                ]
            },
            {
                "category": "Beverages",
                "items": [
                    { "name": "Coke", "price": 59, "serving": "500ml", "description": "Chilled and fizzy Coca-Cola for refreshment." },
                    { "name": "Pepsi", "price": 59, "serving": "500ml", "description": "Classic Pepsi with a crisp, bold taste." },
                    { "name": "Fanta", "price": 59, "serving": "500ml", "description": "Fruity orange soda with a fizzy twist." },
                    { "name": "Iced Tea", "price": 79, "serving": "500ml", "description": "Chilled lemon or peach iced tea." },
                    { "name": "Cold Coffee", "price": 149, "serving": "400ml", "description": "Smooth and creamy iced coffee." },
                    { "name": "Strawberry Shake", "price": 149, "serving": "400ml", "description": "Fresh strawberry-flavored milkshake." },
                    { "name": "Chocolate Shake", "price": 149, "serving": "400ml", "description": "Rich and thick chocolate milkshake." },
                    { "name": "Vanilla Shake", "price": 149, "serving": "400ml", "description": "Classic vanilla milkshake with whipped cream." },
                    { "name": "Lemonade", "price": 89, "serving": "400ml", "description": "Freshly squeezed lemonade with a hint of mint." },
                    { "name": "Mojito", "price": 99, "serving": "400ml", "description": "Refreshing mint and lime-based soft drink." }
                ]
            }
        ]
    }
    ,
    {
        "id": 2,
        "name": "Pizza Hut",
        "cuisines": "Pizza, Italian, Fast Food",
        "rating": 4.1,
        "eta": "30 minutes",
        "image": "https://media.gettyimages.com/id/833378306/photo/generic-shots-of-a-pizza-from-pizza-hut-with-a-pizza-cutter.jpg?s=612x612&w=gi&k=20&c=_h3ggdppcsZFgqcNbP8TPWjohQzVe7b6rXABke4GkqM=",
        "menu": [
            {
                "category": "Pizzas",
                "items": [
                    { "name": "Margherita Pizza", "price": 249, "serving": "Medium", "description": "Classic cheese pizza with a fresh tomato base." },
                    { "name": "Pepperoni Pizza", "price": 349, "serving": "Medium", "description": "Loaded with crispy pepperoni and extra cheese." },
                    { "name": "BBQ Chicken Pizza", "price": 379, "serving": "Medium", "description": "Grilled chicken with smoky BBQ sauce and onions." },
                    { "name": "Veggie Supreme Pizza", "price": 329, "serving": "Medium", "description": "Loaded with fresh bell peppers, olives, and onions." },
                    { "name": "Paneer Tikka Pizza", "price": 359, "serving": "Medium", "description": "Indian-style paneer with a spicy masala base." },
                    { "name": "Meat Lover's Pizza", "price": 399, "serving": "Medium", "description": "A mix of chicken, ham, and pepperoni." },
                    { "name": "Hawaiian Pizza", "price": 349, "serving": "Medium", "description": "A tropical blend of pineapple and ham." },
                    { "name": "Cheese Burst Pizza", "price": 399, "serving": "Medium", "description": "Cheese-filled crust for an extra cheesy bite." },
                    { "name": "Mexican Fiesta Pizza", "price": 359, "serving": "Medium", "description": "Spicy jalapenos, tomatoes, and corn with salsa sauce." },
                    { "name": "White Sauce Chicken Pizza", "price": 389, "serving": "Medium", "description": "Creamy white sauce with grilled chicken and herbs." }
                ]
            },
            {
                "category": "Sides & Appetizers",
                "items": [
                    { "name": "Garlic Breadsticks", "price": 129, "serving": "4 pieces", "description": "Crispy breadsticks with garlic butter." },
                    { "name": "Cheesy Garlic Bread", "price": 159, "serving": "4 pieces", "description": "Loaded with melted mozzarella and herbs." },
                    { "name": "Chicken Wings", "price": 229, "serving": "6 pieces", "description": "Crispy wings tossed in spicy sauce." },
                    { "name": "Stuffed Garlic Knots", "price": 179, "serving": "6 pieces", "description": "Soft knots filled with cheese and garlic butter." },
                    { "name": "Mozzarella Sticks", "price": 189, "serving": "6 pieces", "description": "Crispy coated mozzarella with marinara dip." },
                    { "name": "Veggie Sticks", "price": 159, "serving": "6 pieces", "description": "Crispy breaded vegetable sticks." },
                    { "name": "BBQ Chicken Bites", "price": 199, "serving": "6 pieces", "description": "Grilled BBQ chicken bites with smoky flavor." },
                    { "name": "Loaded Nachos", "price": 179, "serving": "Large", "description": "Crispy nachos topped with cheese, salsa, and jalapenos." },
                    { "name": "Potato Wedges", "price": 139, "serving": "Medium", "description": "Seasoned crispy potato wedges." },
                    { "name": "Coleslaw", "price": 99, "serving": "Small", "description": "Classic fresh coleslaw with a creamy dressing." }
                ]
            },
            {
                "category": "Desserts",
                "items": [
                    { "name": "Chocolate Lava Cake", "price": 149, "serving": "1 piece", "description": "Warm chocolate cake with a molten center." },
                    { "name": "Choco Brownie", "price": 129, "serving": "1 piece", "description": "Fudgy brownie with a rich chocolate taste." },
                    { "name": "Cinnamon Sticks", "price": 159, "serving": "6 pieces", "description": "Sweet cinnamon sticks served with icing." },
                    { "name": "Cheesecake", "price": 179, "serving": "1 slice", "description": "Classic New York-style cheesecake." },
                    { "name": "Ice Cream Sundae", "price": 129, "serving": "1 cup", "description": "Vanilla ice cream topped with chocolate syrup." },
                    { "name": "Chocolate Chip Cookies", "price": 99, "serving": "4 pieces", "description": "Soft and chewy chocolate chip cookies." },
                    { "name": "Mango Mousse", "price": 149, "serving": "1 cup", "description": "Light and creamy mango-flavored mousse." },
                    { "name": "Apple Pie", "price": 169, "serving": "1 slice", "description": "Classic apple pie with a buttery crust." },
                    { "name": "Tiramisu", "price": 199, "serving": "1 slice", "description": "Italian coffee-flavored dessert with mascarpone cheese." },
                    { "name": "Chocolate Truffle Cake", "price": 189, "serving": "1 slice", "description": "Rich chocolate cake with layers of ganache." }
                ]
            }
        ]
    }
    ,
    {
        "id": 3,
        "name": "Subway",
        "cuisines": "Sandwiches, Healthy, Fast Food",
        "rating": 4.2,
        "eta": "25 minutes",
        "image": "https://media.timeout.com/images/105757031/image.jpg",
        "menu": [
            {
                "category": "Sandwiches",
                "items": [
                    { "name": "Turkey Sub", "price": 299, "serving": "6-inch", "description": "Fresh turkey slices with lettuce, tomato, and mayo." },
                    { "name": "Veggie Delight", "price": 249, "serving": "6-inch", "description": "Loaded with fresh veggies and your choice of sauce." },
                    { "name": "Chicken Teriyaki Sub", "price": 349, "serving": "6-inch", "description": "Grilled chicken in teriyaki sauce with fresh toppings." },
                    { "name": "Italian B.M.T.", "price": 329, "serving": "6-inch", "description": "Salami, pepperoni, and ham with a blend of veggies." },
                    { "name": "Tuna Sub", "price": 319, "serving": "6-inch", "description": "Tuna salad with creamy mayo and crisp veggies." },
                    { "name": "Spicy Paneer Sub", "price": 279, "serving": "6-inch", "description": "Indian-spiced paneer with fresh veggies." },
                    { "name": "Egg & Cheese Sub", "price": 269, "serving": "6-inch", "description": "Fluffy eggs and melted cheese on toasted bread." },
                    { "name": "Roast Beef Sub", "price": 349, "serving": "6-inch", "description": "Tender roast beef with mustard and veggies." },
                    { "name": "Meatball Marinara", "price": 359, "serving": "6-inch", "description": "Juicy meatballs in rich marinara sauce." },
                    { "name": "BBQ Chicken Sub", "price": 339, "serving": "6-inch", "description": "Grilled chicken coated in smoky BBQ sauce." }
                ]
            },
            {
                "category": "Salads & Wraps",
                "items": [
                    { "name": "Chicken Caesar Salad", "price": 299, "serving": "Large", "description": "Grilled chicken with romaine, croutons, and parmesan." },
                    { "name": "Veggie Wrap", "price": 249, "serving": "1 wrap", "description": "Fresh veggies wrapped in a whole wheat tortilla." },
                    { "name": "Tuna Salad", "price": 319, "serving": "Large", "description": "Fresh tuna mixed with creamy dressing and greens." },
                    { "name": "Paneer Tikka Wrap", "price": 279, "serving": "1 wrap", "description": "Indian-style paneer with a spicy kick." }
                ]
            },
            {
                "category": "Beverages",
                "items": [
                    { "name": "Lemonade", "price": 89, "serving": "400ml", "description": "Freshly squeezed lemon juice with a sweet and tangy flavor." },
                    { "name": "Iced Tea", "price": 79, "serving": "500ml", "description": "Chilled lemon or peach iced tea for refreshment." },
                    { "name": "Cold Coffee", "price": 149, "serving": "400ml", "description": "Smooth and creamy iced coffee with a hint of vanilla." }
                ]
            }
        ]
    },
    {
        "id": 4,
        "name": "Burger King",
        "cuisines": "Burgers, Fast Food, American",
        "rating": 3.9,
        "eta": "35 minutes",
        "image": "https://cdn.prod.website-files.com/631b4b4e277091ef01450237/65947cd2a2c28c35b5ca6fb1_Whopper%20w%20Cheese.png",
        "menu": [
            {
                "category": "Burgers",
                "items": [
                    { "name": "Whopper Burger", "price": 249, "serving": "1 burger", "description": "Flame-grilled beef patty with lettuce, tomato, and mayo." },
                    { "name": "Cheeseburger", "price": 199, "serving": "1 burger", "description": "Juicy beef patty with melted cheese and pickles." },
                    { "name": "Bacon King", "price": 299, "serving": "1 burger", "description": "Double beef patty with crispy bacon and melted cheese." },
                    { "name": "Double Whopper", "price": 349, "serving": "1 burger", "description": "Two flame-grilled beef patties with fresh toppings." },
                    { "name": "Crispy Chicken Burger", "price": 229, "serving": "1 burger", "description": "Crispy fried chicken fillet with creamy mayo." },
                    { "name": "Veggie Burger", "price": 179, "serving": "1 burger", "description": "A plant-based patty with fresh lettuce and cheese." },
                    { "name": "BBQ Bacon Burger", "price": 269, "serving": "1 burger", "description": "Smoky BBQ sauce with crispy bacon and cheddar cheese." },
                    { "name": "Spicy Chicken Burger", "price": 239, "serving": "1 burger", "description": "Spicy breaded chicken with jalapenos and chipotle sauce." },
                    { "name": "Mushroom Swiss Burger", "price": 289, "serving": "1 burger", "description": "Beef patty topped with sautéed mushrooms and Swiss cheese." },
                    { "name": "Fish Fillet Burger", "price": 219, "serving": "1 burger", "description": "Crispy fish fillet with tartar sauce and lettuce." }
                ]
            },
            {
                "category": "Fries & Sides",
                "items": [
                    { "name": "French Fries", "price": 99, "serving": "Medium", "description": "Crispy golden fries seasoned to perfection." },
                    { "name": "Cheese Fries", "price": 129, "serving": "Medium", "description": "Crispy fries topped with melted cheese." },
                    { "name": "Onion Rings", "price": 119, "serving": "10 pcs", "description": "Crunchy, battered onion rings with a side of dipping sauce." },
                    { "name": "Chicken Fries", "price": 149, "serving": "6 pcs", "description": "Breaded chicken strips shaped like fries." },
                    { "name": "Mozzarella Sticks", "price": 159, "serving": "6 pcs", "description": "Crispy mozzarella sticks with marinara sauce." },
                    { "name": "Jalapeno Poppers", "price": 139, "serving": "6 pcs", "description": "Cheesy jalapeno bites with a spicy kick." },
                    { "name": "Loaded Fries", "price": 179, "serving": "Large", "description": "Fries topped with cheese, bacon, and ranch dressing." },
                    { "name": "Potato Wedges", "price": 109, "serving": "Medium", "description": "Seasoned potato wedges with a crispy outer layer." },
                    { "name": "Garlic Bread", "price": 99, "serving": "4 slices", "description": "Toasted garlic bread with melted butter and herbs." },
                    { "name": "Hash Browns", "price": 119, "serving": "2 pcs", "description": "Golden crispy hash browns, perfect for breakfast." }
                ]
            },
            {
                "category": "Beverages",
                "items": [
                    { "name": "Coke", "price": 59, "serving": "500ml", "description": "Refreshing carbonated cola drink." },
                    { "name": "Pepsi", "price": 59, "serving": "500ml", "description": "Classic Pepsi for a crisp, refreshing taste." },
                    { "name": "Sprite", "price": 59, "serving": "500ml", "description": "Lemon-lime soda with a fizzy twist." },
                    { "name": "Fanta", "price": 59, "serving": "500ml", "description": "Fruity orange-flavored soda." },
                    { "name": "Iced Tea", "price": 79, "serving": "500ml", "description": "Chilled lemon or peach iced tea for a refreshing taste." },
                    { "name": "Chocolate Shake", "price": 149, "serving": "400ml", "description": "Rich chocolate milkshake with whipped cream." },
                    { "name": "Strawberry Shake", "price": 149, "serving": "400ml", "description": "Creamy strawberry-flavored milkshake." },
                    { "name": "Vanilla Shake", "price": 149, "serving": "400ml", "description": "Classic vanilla milkshake with smooth texture." },
                    { "name": "Cold Coffee", "price": 169, "serving": "350ml", "description": "Chilled coffee with milk and sugar." },
                    { "name": "Lemonade", "price": 89, "serving": "400ml", "description": "Freshly squeezed lemon juice with a sweet and tangy flavor." }
                ]
            }
        ]
    }
    ,
    {
        "id": 5,
        "name": "Domino's",
        "cuisines": "Pizza, Italian, Fast Food",
        "rating": 4.3,
        "eta": "28 minutes",
        "image": "https://www.dominos.com/static/1.105.0/images/tiles/mixAndMatchDeal/hero.webp",
        "menu": [
            {
                "category": "Pizzas",
                "items": [
                    { "name": "Cheese Burst Pizza", "price": 299, "serving": "Medium", "description": "Loaded with extra cheese inside the crust." },
                    { "name": "Farmhouse Pizza", "price": 349, "serving": "Medium", "description": "Topped with onions, capsicum, tomatoes, and mushrooms." },
                    { "name": "Pepperoni Feast", "price": 399, "serving": "Medium", "description": "Classic pepperoni with a double layer of cheese." }
                ]
            },
            {
                "category": "Sides & Appetizers",
                "items": [
                    { "name": "Garlic Bread", "price": 129, "serving": "4 pieces", "description": "Oven-baked garlic bread with Italian seasoning." },
                    { "name": "Stuffed Cheese Bread", "price": 159, "serving": "4 pieces", "description": "Garlic bread stuffed with melted cheese." }
                ]
            }
        ]
    },
    {
        "id": 6,
        "name": "McDonald's",
        "cuisines": "Burgers, Fast Food, American",
        "rating": 4.2,
        "eta": "25 minutes",
        "image": "https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=90/media/photosV2/f6a32d05-c463-496a-82fd-1b734bd9d069-retina-large.jpg",
        "menu": [
            {
                "category": "Burgers",
                "items": [
                    { "name": "Big Mac", "price": 299, "serving": "1 burger", "description": "Two all-beef patties, special sauce, lettuce, cheese, pickles, and onions on a sesame seed bun." },
                    { "name": "McChicken", "price": 249, "serving": "1 burger", "description": "Crispy chicken patty with lettuce and mayo on a soft bun." }
                ]
            },
            {
                "category": "Fries & Sides",
                "items": [
                    { "name": "French Fries", "price": 99, "serving": "Medium", "description": "Crispy golden fries with McDonald's signature seasoning." },
                    { "name": "Mozzarella Sticks", "price": 159, "serving": "6 pieces", "description": "Breaded mozzarella sticks served with marinara sauce." }
                ]
            },
            {
                "category": "Chicken Items",
                "items": [
                    { "name": "Chicken McNuggets", "price": 199, "serving": "6 pieces", "description": "Crispy, tender chicken nuggets with dipping sauce." },
                    { "name": "Spicy Chicken Wrap", "price": 269, "serving": "1 wrap", "description": "Spicy chicken wrapped with fresh lettuce and sauce." }
                ]
            },
            {
                "category": "Desserts",
                "items": [
                    { "name": "Apple Pie", "price": 149, "serving": "1 piece", "description": "Classic McDonald's apple pie with a crispy crust." },
                    { "name": "McFlurry Oreo", "price": 199, "serving": "1 cup", "description": "Vanilla soft-serve ice cream blended with Oreo crumbs." }
                ]
            },
            {
                "category": "Beverages",
                "items": [
                    { "name": "Coca-Cola", "price": 59, "serving": "500ml", "description": "Chilled and fizzy Coca-Cola." },
                    { "name": "Chocolate Shake", "price": 149, "serving": "400ml", "description": "Rich and creamy chocolate milkshake." }
                ]
            }
        ]
    },
    {
        "id": 7,
        "name": "Taco Bell",
        "cuisines": "Mexican, Fast Food",
        "rating": 4.3,
        "eta": "20 minutes",
        "image": "https://www.tacobell.com/images/27268_luxe_cravings_box_ft_90s_gordita_supreme_269x269.jpg",
        "menu": [
            {
                "category": "Tacos",
                "items": [
                    { "name": "Crunchy Taco", "price": 129, "serving": "1 taco", "description": "Crispy taco shell filled with seasoned beef, lettuce, and cheese." },
                    { "name": "Soft Taco", "price": 129, "serving": "1 taco", "description": "Warm flour tortilla with seasoned beef, lettuce, and cheese." },
                    { "name": "Chicken Taco", "price": 149, "serving": "1 taco", "description": "Grilled chicken, lettuce, and shredded cheese in a soft shell." },
                    { "name": "Veggie Taco", "price": 129, "serving": "1 taco", "description": "Soft taco filled with seasoned black beans, lettuce, and cheese." },
                    { "name": "Spicy Ranch Taco", "price": 159, "serving": "1 taco", "description": "Crispy shell with beef, spicy ranch sauce, and veggies." },
                    { "name": "Cheesy Gordita Crunch", "price": 179, "serving": "1 taco", "description": "Soft gordita filled with crispy taco, cheese, and beef." }
                ]
            },
            {
                "category": "Burritos",
                "items": [
                    { "name": "Beef Burrito", "price": 199, "serving": "1 burrito", "description": "Warm tortilla stuffed with beef, rice, beans, and cheese." },
                    { "name": "Chicken Burrito", "price": 219, "serving": "1 burrito", "description": "Grilled chicken, rice, beans, and tangy salsa." },
                    { "name": "Veggie Burrito", "price": 189, "serving": "1 burrito", "description": "A mix of beans, rice, cheese, and fresh veggies." },
                    { "name": "Spicy Chipotle Burrito", "price": 229, "serving": "1 burrito", "description": "Beef, rice, cheese, and spicy chipotle sauce." },
                    { "name": "Cheesy Beef Burrito", "price": 239, "serving": "1 burrito", "description": "Double-layered beef with extra cheese and rice." },
                    { "name": "Fiesta Burrito", "price": 249, "serving": "1 burrito", "description": "A fully loaded burrito with beef, guacamole, and salsa." }
                ]
            }
        ]
    },
    {
        "id": 8,
        "name": "Starbucks",
        "cuisines": "Coffee, Beverages, Bakery",
        "rating": 4.5,
        "eta": "15 minutes",
        "image": "https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk4NTAwOTQ0MjkwMjYwOTAz/starbucks-frappuccino-flavors.jpg",
        "menu": [
            {
                "category": "Hot Coffees",
                "items": [
                    { "name": "Caffè Americano", "price": 199, "serving": "Tall", "description": "Espresso shots topped with hot water for a rich and bold flavor." },
                    { "name": "Cappuccino", "price": 229, "serving": "Tall", "description": "Rich espresso with a deep layer of frothy steamed milk." },
                    { "name": "Caramel Macchiato", "price": 249, "serving": "Tall", "description": "Espresso combined with vanilla syrup, steamed milk, and caramel drizzle." },
                    { "name": "Flat White", "price": 239, "serving": "Tall", "description": "Velvety microfoam milk over rich espresso shots." },
                    { "name": "Caffè Mocha", "price": 259, "serving": "Tall", "description": "Espresso with bittersweet mocha sauce and steamed milk, topped with whipped cream." },
                    { "name": "Pumpkin Spice Latte", "price": 269, "serving": "Tall", "description": "Signature espresso and steamed milk with pumpkin, cinnamon, nutmeg, and clove." }
                ]
            },
            {
                "category": "Cold Coffees",
                "items": [
                    { "name": "Cold Brew", "price": 249, "serving": "Tall", "description": "Slow-steeped, super smooth cold brew coffee." },
                    { "name": "Iced Caffè Latte", "price": 239, "serving": "Tall", "description": "Rich espresso balanced with cold milk and served over ice." },
                    { "name": "Iced Caramel Macchiato", "price": 269, "serving": "Tall", "description": "Rich espresso, vanilla-flavored milk, and caramel drizzle over ice." },
                    { "name": "Vanilla Sweet Cream Cold Brew", "price": 279, "serving": "Tall", "description": "Cold brew coffee topped with vanilla sweet cream." },
                    { "name": "Iced Mocha", "price": 259, "serving": "Tall", "description": "Espresso with bittersweet mocha sauce, milk, and ice, topped with whipped cream." },
                    { "name": "Iced White Chocolate Mocha", "price": 279, "serving": "Tall", "description": "Espresso with white chocolate sauce, milk, and ice, topped with whipped cream." }
                ]
            },
            {
                "category": "Frappuccinos",
                "items": [
                    { "name": "Java Chip Frappuccino", "price": 289, "serving": "Tall", "description": "A blend of coffee, milk, ice, and chocolate chips, topped with whipped cream." },
                    { "name": "Caramel Frappuccino", "price": 279, "serving": "Tall", "description": "Coffee blended with caramel syrup, milk, and ice, topped with whipped cream." },
                    { "name": "Mocha Frappuccino", "price": 289, "serving": "Tall", "description": "Coffee blended with mocha sauce, milk, and ice, topped with whipped cream." },
                    { "name": "Vanilla Bean Frappuccino", "price": 269, "serving": "Tall", "description": "A blend of milk, ice, and vanilla bean flavor, topped with whipped cream." },
                    { "name": "Matcha Green Tea Frappuccino", "price": 289, "serving": "Tall", "description": "Matcha green tea blended with milk and ice, topped with whipped cream." },
                    { "name": "Strawberries & Crème Frappuccino", "price": 269, "serving": "Tall", "description": "A blend of strawberries, milk, and ice, topped with whipped cream." }
                ]
            },
            {
                "category": "Bakery & Snacks",
                "items": [
                    { "name": "Butter Croissant", "price": 159, "serving": "1 piece", "description": "Flaky, buttery croissant baked to perfection." },
                    { "name": "Chocolate Croissant", "price": 179, "serving": "1 piece", "description": "A buttery croissant filled with rich chocolate." },
                    { "name": "Blueberry Muffin", "price": 199, "serving": "1 piece", "description": "Soft muffin filled with juicy blueberries." },
                    { "name": "Cinnamon Roll", "price": 219, "serving": "1 piece", "description": "A warm, fluffy roll swirled with cinnamon and topped with icing." },
                    { "name": "Pumpkin Loaf", "price": 209, "serving": "1 slice", "description": "Spiced pumpkin bread with hints of cinnamon and nutmeg." },
                    { "name": "Chocolate Chip Cookie", "price": 129, "serving": "1 piece", "description": "Soft, chewy cookie loaded with chocolate chips." }
                ]
            }
        ]
    },
    {
        "id": 9,
        "name": "Haldiram's",
        "cuisines": "Indian, Sweets, Snacks",
        "rating": 4.4,
        "eta": "20 minutes",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMDyAgKe_oLxgN8eAnj4PHhbj_3NWqhy2rVw&s",
        "menu": [
            {
                "category": "Indian Snacks",
                "items": [
                    { "name": "Samosa", "price": 30, "serving": "1 piece", "description": "Crispy fried pastry filled with spiced potatoes and peas." },
                    { "name": "Kachori", "price": 35, "serving": "1 piece", "description": "Flaky deep-fried snack filled with spicy lentils." },
                    { "name": "Aloo Tikki", "price": 40, "serving": "2 pieces", "description": "Crispy potato patties served with chutney." },
                    { "name": "Paneer Pakora", "price": 90, "serving": "6 pieces", "description": "Crispy fried cottage cheese fritters." },
                    { "name": "Dhokla", "price": 70, "serving": "200g", "description": "Soft and spongy fermented gram flour snack." },
                    { "name": "Chole Bhature", "price": 120, "serving": "1 plate", "description": "Spicy chickpeas served with fluffy fried bread." }
                ]
            },
            {
                "category": "Sweets",
                "items": [
                    { "name": "Rasgulla", "price": 100, "serving": "4 pieces", "description": "Soft and spongy cottage cheese dumplings soaked in sugar syrup." },
                    { "name": "Gulab Jamun", "price": 90, "serving": "4 pieces", "description": "Deep-fried milk dumplings soaked in saffron sugar syrup." },
                    { "name": "Motichoor Ladoo", "price": 110, "serving": "250g", "description": "Sweet gram flour balls mixed with sugar syrup." },
                    { "name": "Kaju Katli", "price": 160, "serving": "250g", "description": "Diamond-shaped cashew nut fudge." },
                    { "name": "Jalebi", "price": 80, "serving": "200g", "description": "Crispy deep-fried spirals soaked in sugar syrup." },
                    { "name": "Besan Ladoo", "price": 100, "serving": "250g", "description": "Rich and aromatic gram flour sweet balls." }
                ]
            },
            {
                "category": "North Indian Meals",
                "items": [
                    { "name": "Rajma Chawal", "price": 140, "serving": "1 plate", "description": "Red kidney beans curry served with steamed rice." },
                    { "name": "Dal Makhani", "price": 150, "serving": "1 plate", "description": "Creamy black lentil curry served with butter naan." },
                    { "name": "Paneer Butter Masala", "price": 180, "serving": "1 plate", "description": "Rich tomato-based paneer curry with butter and cream." },
                    { "name": "Shahi Paneer", "price": 190, "serving": "1 plate", "description": "Royal-style paneer curry with nuts and spices." },
                    { "name": "Chole Puri", "price": 130, "serving": "1 plate", "description": "Spicy chickpea curry served with crispy puris." },
                    { "name": "Stuffed Paratha", "price": 100, "serving": "1 plate", "description": "Indian flatbread stuffed with spiced potatoes or paneer." }
                ]
            },
            {
                "category": "Chaats",
                "items": [
                    { "name": "Pani Puri", "price": 60, "serving": "6 pieces", "description": "Crispy hollow puris filled with tangy water and spicy stuffing." },
                    { "name": "Dahi Puri", "price": 70, "serving": "6 pieces", "description": "Crispy puris topped with yogurt and sweet chutney." },
                    { "name": "Papdi Chaat", "price": 80, "serving": "1 plate", "description": "Crunchy fried wafers topped with curd and tangy sauces." },
                    { "name": "Aloo Chaat", "price": 90, "serving": "1 plate", "description": "Fried potatoes mixed with chutneys and masalas." },
                    { "name": "Sev Puri", "price": 85, "serving": "6 pieces", "description": "Crispy puris topped with onions, tomatoes, and sev." },
                    { "name": "Bhel Puri", "price": 75, "serving": "1 plate", "description": "Puffed rice mixed with tangy sauces and spices." }
                ]
            },
            {
                "category": "Beverages",
                "items": [
                    { "name": "Masala Chai", "price": 40, "serving": "1 cup", "description": "Traditional Indian spiced tea brewed with milk and herbs." },
                    { "name": "Lassi", "price": 80, "serving": "400ml", "description": "Thick and creamy yogurt-based drink, available sweet or salted." },
                    { "name": "Badam Milk", "price": 100, "serving": "400ml", "description": "Milk infused with almonds, saffron, and cardamom." },
                    { "name": "Nimbu Pani", "price": 50, "serving": "400ml", "description": "Refreshing lemonade with a hint of black salt." },
                    { "name": "Rose Sharbat", "price": 70, "serving": "400ml", "description": "Chilled rose-flavored summer drink." },
                    { "name": "Thandai", "price": 110, "serving": "400ml", "description": "Traditional festival drink infused with dry fruits and spices." }
                ]
            }
        ]
    },
    {
        "id": 10,
        "name": "Barbeque Nation",
        "cuisines": "Grill, Buffet, Indian",
        "rating": 4.5,
        "eta": "30 minutes",
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/81/fe/5b/barbeque-nation.jpg?w=700&h=-1&s=1",
        "menu": [
            {
                "category": "Starters",
                "items": [
                    { "name": "Tandoori Chicken", "price": 299, "serving": "4 pieces", "description": "Spicy marinated chicken grilled to perfection." },
                    { "name": "Paneer Tikka", "price": 259, "serving": "6 pieces", "description": "Cottage cheese marinated with spices and grilled." },
                    { "name": "Mutton Seekh Kebab", "price": 349, "serving": "4 pieces", "description": "Juicy minced mutton skewers cooked in a tandoor." },
                    { "name": "Grilled Prawns", "price": 399, "serving": "6 pieces", "description": "Fresh prawns marinated and grilled to perfection." },
                    { "name": "Haryali Tikka", "price": 279, "serving": "6 pieces", "description": "Chicken marinated with green herbs and yogurt." },
                    { "name": "Crispy Corn", "price": 199, "serving": "1 bowl", "description": "Golden fried corn tossed with spices and herbs." }
                ]
            },
            {
                "category": "Main Course",
                "items": [
                    { "name": "Butter Chicken", "price": 349, "serving": "1 plate", "description": "Rich and creamy tomato-based chicken curry." },
                    { "name": "Dal Makhani", "price": 299, "serving": "1 plate", "description": "Slow-cooked black lentils in a buttery tomato sauce." },
                    { "name": "Mutton Rogan Josh", "price": 399, "serving": "1 plate", "description": "Aromatic Kashmiri-style mutton curry." },
                    { "name": "Paneer Lababdar", "price": 329, "serving": "1 plate", "description": "Paneer cooked in a rich tomato and onion-based gravy." },
                    { "name": "Chicken Biryani", "price": 349, "serving": "1 plate", "description": "Aromatic basmati rice cooked with spices and chicken." },
                    { "name": "Vegetable Pulao", "price": 249, "serving": "1 plate", "description": "Basmati rice cooked with aromatic spices and vegetables." }
                ]
            },
            {
                "category": "Live Grill",
                "items": [
                    { "name": "BBQ Chicken Wings", "price": 299, "serving": "6 pieces", "description": "Chicken wings coated with BBQ sauce and grilled." },
                    { "name": "Garlic Butter Prawns", "price": 399, "serving": "6 pieces", "description": "Prawns grilled in garlic butter sauce." },
                    { "name": "Tandoori Mushrooms", "price": 249, "serving": "6 pieces", "description": "Mushrooms marinated with Indian spices and grilled." },
                    { "name": "Peri Peri Chicken", "price": 329, "serving": "6 pieces", "description": "Chicken grilled with spicy peri peri seasoning." },
                    { "name": "Grilled Pineapple", "price": 199, "serving": "4 pieces", "description": "Sweet pineapple slices grilled with cinnamon." },
                    { "name": "Fish Tikka", "price": 359, "serving": "6 pieces", "description": "Fresh fish chunks marinated and grilled to perfection." }
                ]
            },
            {
                "category": "Desserts",
                "items": [
                    { "name": "Gulab Jamun", "price": 129, "serving": "4 pieces", "description": "Deep-fried milk dumplings soaked in sugar syrup." },
                    { "name": "Brownie with Ice Cream", "price": 199, "serving": "1 plate", "description": "Warm chocolate brownie served with vanilla ice cream." },
                    { "name": "Phirni", "price": 149, "serving": "1 bowl", "description": "Traditional rice pudding flavored with saffron and cardamom." },
                    { "name": "Fruit Custard", "price": 129, "serving": "1 bowl", "description": "Creamy custard with fresh seasonal fruits." },
                    { "name": "Rasmalai", "price": 149, "serving": "2 pieces", "description": "Soft paneer dumplings soaked in saffron milk." },
                    { "name": "Ice Cream Assortment", "price": 159, "serving": "1 scoop", "description": "A variety of ice cream flavors to choose from." }
                ]
            },
            {
                "category": "Beverages",
                "items": [
                    { "name": "Masala Lemonade", "price": 89, "serving": "400ml", "description": "Refreshing lemonade infused with Indian spices." },
                    { "name": "Virgin Mojito", "price": 99, "serving": "400ml", "description": "Mint and lime-based refreshing summer drink." },
                    { "name": "Aam Panna", "price": 109, "serving": "400ml", "description": "Traditional mango-flavored summer cooler." },
                    { "name": "Sweet Lassi", "price": 119, "serving": "400ml", "description": "Thick yogurt-based drink with sugar and cardamom." },
                    { "name": "Cold Coffee", "price": 139, "serving": "400ml", "description": "Chilled coffee blended with milk and sugar." },
                    { "name": "Masala Chai", "price": 69, "serving": "1 cup", "description": "Traditional spiced Indian tea brewed with milk." }
                ]
            }
        ]
    },
    {
        "id": 11,
        "name": "Baskin Robbins",
        "cuisines": "Ice Cream, Desserts",
        "rating": 4.5,
        "eta": "15 minutes",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgHfhRvg2skbEtuLfbSP4s8B7_iQaMFjevIw&s",
        "menu": [
            {
                "category": "Classic Ice Creams",
                "items": [
                    { "name": "Vanilla", "price": 149, "serving": "1 scoop", "description": "Smooth and creamy vanilla-flavored ice cream." },
                    { "name": "Chocolate", "price": 159, "serving": "1 scoop", "description": "Rich and creamy chocolate ice cream." },
                    { "name": "Strawberry", "price": 149, "serving": "1 scoop", "description": "Sweet and fruity strawberry-flavored ice cream." },
                    { "name": "Mint Chocolate Chip", "price": 169, "serving": "1 scoop", "description": "Refreshing mint ice cream with chocolate chips." },
                    { "name": "Butterscotch", "price": 159, "serving": "1 scoop", "description": "Creamy butterscotch ice cream with crunchy praline." },
                    { "name": "Coffee Almond Fudge", "price": 179, "serving": "1 scoop", "description": "Coffee-flavored ice cream with almond chunks and fudge swirl." }
                ]
            },
            {
                "category": "Premium Ice Creams",
                "items": [
                    { "name": "Gold Medal Ribbon", "price": 199, "serving": "1 scoop", "description": "Swirls of vanilla and chocolate ice cream with caramel ribbon." },
                    { "name": "Jamoca Almond Fudge", "price": 209, "serving": "1 scoop", "description": "Coffee ice cream with roasted almonds and fudge swirl." },
                    { "name": "Cookies and Cream", "price": 199, "serving": "1 scoop", "description": "Vanilla ice cream loaded with cookie chunks." },
                    { "name": "Rocky Road", "price": 219, "serving": "1 scoop", "description": "Chocolate ice cream with marshmallows and nuts." },
                    { "name": "Pistachio Almond", "price": 219, "serving": "1 scoop", "description": "Nutty pistachio ice cream with crunchy almonds." },
                    { "name": "Very Berry Strawberry", "price": 209, "serving": "1 scoop", "description": "Strawberry ice cream made with real fruit pieces." }
                ]
            },
            {
                "category": "Sundaes",
                "items": [
                    { "name": "Hot Fudge Sundae", "price": 249, "serving": "1 bowl", "description": "Vanilla ice cream topped with rich hot fudge and whipped cream." },
                    { "name": "Brownie Sundae", "price": 279, "serving": "1 bowl", "description": "Chocolate ice cream over a fudgy brownie with hot fudge sauce." },
                    { "name": "Banana Split", "price": 299, "serving": "1 bowl", "description": "Three scoops of ice cream with banana, whipped cream, and cherries." },
                    { "name": "Caramel Sundae", "price": 259, "serving": "1 bowl", "description": "Vanilla ice cream drizzled with caramel sauce and topped with nuts." },
                    { "name": "Oreo Sundae", "price": 269, "serving": "1 bowl", "description": "Cookies and cream ice cream topped with Oreo crumbles and chocolate syrup." },
                    { "name": "Nutty Delight Sundae", "price": 289, "serving": "1 bowl", "description": "Chocolate and vanilla ice cream topped with almonds and walnuts." }
                ]
            },
            {
                "category": "Ice Cream Cakes",
                "items": [
                    { "name": "Chocolate Mousse Cake", "price": 499, "serving": "Small", "description": "Chocolate cake layered with creamy chocolate mousse ice cream." },
                    { "name": "Strawberry Cheesecake", "price": 529, "serving": "Small", "description": "Strawberry-flavored cheesecake with ice cream layers." },
                    { "name": "Cookies & Cream Cake", "price": 549, "serving": "Small", "description": "Oreo-infused ice cream cake with chocolate crust." },
                    { "name": "Black Forest Ice Cream Cake", "price": 579, "serving": "Small", "description": "Chocolate cake with cherry-infused ice cream layers." },
                    { "name": "Caramel Crunch Cake", "price": 599, "serving": "Small", "description": "Caramel ice cream with a crunchy nut topping and chocolate drizzle." },
                    { "name": "Triple Chocolate Cake", "price": 649, "serving": "Small", "description": "Dark, milk, and white chocolate layers in one decadent cake." }
                ]
            },
            {
                "category": "Beverages & Shakes",
                "items": [
                    { "name": "Chocolate Shake", "price": 229, "serving": "400ml", "description": "Thick and creamy chocolate milkshake." },
                    { "name": "Strawberry Shake", "price": 219, "serving": "400ml", "description": "Refreshing strawberry-flavored milkshake." },
                    { "name": "Coffee Shake", "price": 239, "serving": "400ml", "description": "Blended coffee ice cream shake with whipped cream." },
                    { "name": "Mango Smoothie", "price": 249, "serving": "400ml", "description": "Creamy mango smoothie made with real fruit." },
                    { "name": "Cookie Crumble Shake", "price": 269, "serving": "400ml", "description": "Blended cookies & cream ice cream shake." },
                    { "name": "Caramel Fudge Shake", "price": 279, "serving": "400ml", "description": "Thick caramel shake topped with fudge drizzle." }
                ]
            }
        ]
    }
    
];

// Default route
app.get("/", (req, res) => {
    res.send("Welcome to the Restaurant API!");
});

// Route to get all restaurants
app.get("/restaurants", (req, res) => {
    res.json(restaurants.map(({ id, name, cuisines, rating, eta, image }) => ({
        id, name, cuisines, rating, eta, image
    }))); // Exclude menu in the list
});

// Route to get a restaurant by ID
app.get("/restaurants/:id", (req, res) => {
    const id = parseInt(req.params.id);
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
