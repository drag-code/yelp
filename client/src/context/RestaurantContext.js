import React, {useState, createContext} from 'react';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = props =>{
    const [restaurants, setRestaurant] = useState([]);

    return(
        <RestaurantContext.Provider value={{restaurants, setRestaurant}}>
            {props.children}
        </RestaurantContext.Provider>
    )
}