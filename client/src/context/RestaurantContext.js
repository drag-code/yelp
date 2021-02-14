import React, {useState, createContext} from 'react';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = props =>{
    const [restaurants, setRestaurant] = useState([]);

    const addRestaurants = (restaurant) => {
        setRestaurant([...restaurants, restaurant])
    }

    const deleteRestaurants = (id) => {
        setRestaurant(restaurants.filter(restaurant => restaurant.id !== id))
    }

    return(
        <RestaurantContext.Provider value={{restaurants, setRestaurant, addRestaurants, deleteRestaurants}}>
            {props.children}
        </RestaurantContext.Provider>
    )
}