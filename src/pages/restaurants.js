import { useState } from "react";

export default function Restaurants() {
    const [filterByHighlyRated, setFilterByHighlyRated] = useState(false)
    const [rating, setRating] = useState(4.5)

    const restaurantList = [
        { name: "The Hungry Panda", rating: 4.2 },
        { name: "Cafe Delight", rating: 3.8 },
        { name: "Pizza Palace", rating: 4.5 },
        { name: "Sushi House", rating: 4.6 },
        { name: "Burger Haven", rating: 3.9 },
        { name: "Mama Mia Italian", rating: 4.7 },
        { name: "Taco Town", rating: 4.0 },
        { name: "Gourmet Grill", rating: 4.4 },
        { name: "Noodle World", rating: 3.5 },
        { name: "Breakfast Bites", rating: 4.1 },
        { name: "Thai Spice", rating: 4.3 },
        { name: "Diner's Delight", rating: 3.7 },
        { name: "Seafood Sensation", rating: 4.8 },
        { name: "Steakhouse Supreme", rating: 4.9 },
        { name: "Veggie Delights", rating: 4.2 },
        { name: "Mediterranean Magic", rating: 3.8 },
        { name: "Sizzling Szechuan", rating: 4.5 },
        { name: "Pasta Paradise", rating: 4.6 },
        { name: "Bistro Bliss", rating: 3.9 },
        { name: "Mexican Fiesta", rating: 4.7 },
        { name: "BBQ Heaven", rating: 4.0 },
        { name: "Ramen Express", rating: 4.4 },
        { name: "Crispy Crust Pizzeria", rating: 3.5 },
        { name: "Wok and Roll", rating: 4.1 },
        { name: "Bakery Delights", rating: 4.3 },
        { name: "Brewery Bites", rating: 3.7 },
        { name: "Taste of India", rating: 4.8 },
        { name: "Grill Master", rating: 4.9 },
        { name: "Cafe Paris", rating: 4.2 },
        { name: "Sushi Sensations", rating: 3.8 },
        { name: "Burger Barn", rating: 4.5 },
        { name: "Pizza Planet", rating: 4.6 },
        { name: "Soul Food Cafe", rating: 3.9 },
        { name: "Italiano Ristorante", rating: 4.7 },
        { name: "Taco Time", rating: 4.0 },
        { name: "Flavor Fusion", rating: 4.4 },
        { name: "Noodle House", rating: 3.5 },
        { name: "Morning Munchies", rating: 4.1 },
        { name: "Spicy Thai Delight", rating: 4.3 },
        { name: "Diner's Choice", rating: 3.7 },
        { name: "Ocean Delights", rating: 4.8 },
        { name: "Steak Out", rating: 4.9 },
        { name: "Green Garden", rating: 4.2 },
        { name: "Mediterranean Oasis", rating: 3.8 },
        { name: "Szechuan Palace", rating: 4.5 },
        { name: "Pasta Perfecto", rating: 4.6 },
        { name: "Bistro Elegance", rating: 3.9 },
        { name: "Casa Mexicana", rating: 4.7 },
        { name: "BBQ Delight", rating: 4.0 },
        { name: "Ramen House", rating: 4.4 },
        { name: "Crusty Cravings", rating: 3.5 },
        { name: "Wok Star", rating: 4.1 },
        { name: "Sweet Tooth Bakery", rating: 4.3 },
        { name: "Brewer's Delight", rating: 3.7 },
        { name: "Flavors of India", rating: 4.8 },
        { name: "Grill Guru", rating: 4.9 },
        { name: "Cafe Vienna", rating: 4.2 },
        { name: "Sushi Central", rating: 3.8 },
        { name: "Burger Express", rating: 4.5 },
        { name: "Pizza Haven", rating: 4.6 },
        { name: "Southern Comfort", rating: 3.9 },
        { name: "Trattoria Bella", rating: 4.7 },
        { name: "Taco Fiesta", rating: 4.0 },
        { name: "Flavorful Grub", rating: 4.4 },
        { name: "Noodle Delights", rating: 3.5 },
        { name: "Morning Eats", rating: 4.1 },
        { name: "Spice of Asia", rating: 4.3 },
        { name: "Diner's Haven", rating: 3.7 },
        { name: "Seafood Sensations", rating: 4.8 },
        { name: "Steakhouse Deluxe", rating: 4.9 },
        { name: "Veggie Visions", rating: 4.2 },
        { name: "Mediterranean Delights", rating: 3.8 },
        { name: "Szechuan Delicacy", rating: 4.5 },
        { name: "Pasta Perfection", rating: 4.6 },
        { name: "Bistro Bites", rating: 3.9 },
        { name: "Mexican Delights", rating: 4.7 },
        { name: "Smokehouse BBQ", rating: 4.0 },
        { name: "Ramen Bliss", rating: 4.4 },
        { name: "Crusty's Pizza", rating: 3.5 },
        { name: "Wok Wonderland", rating: 4.1 },
        { name: "Bakery Bliss", rating: 4.3 },
        { name: "Craft Brews & Bites", rating: 3.7 },
        { name: "Taste of the Orient", rating: 4.8 },
        { name: "Grill House", rating: 4.9 },
      ];

      let filteredRestaurants = restaurantList;

      if (filterByHighlyRated) {
        filteredRestaurants = filteredRestaurants.filter(restaurant => restaurant.rating > rating)
      }

      function enableFiltering() {
        setFilterByHighlyRated(true)
      }

      function changeRating(e) {
        const ratingToChange = e.currentTarget.value
        const ratingInNumber = parseFloat(ratingToChange)
        setRating(ratingInNumber)
      }

      return <div>
        {filteredRestaurants.map(restaurant => <div>{restaurant.name}</div>)}

        <button onClick={enableFiltering}>Show highly rated restaurants</button>
        <input onChange={changeRating}></input>
      </div>
}