import React, {useState, createContext} from 'react';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = props =>{
    const [restaurants, setRestaurant] = useState([]);

    const addRestaurants = (restaurant) => {
        setRestaurant([...restaurants, restaurant])
    }
    return(
        <RestaurantContext.Provider value={{restaurants, setRestaurant, addRestaurants}}>
            {props.children}
        </RestaurantContext.Provider>
    )
}