import React, { useEffect, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantContext } from "../context/RestaurantContext";

const Table = (props) => {
	const { restaurants, setRestaurant, deleteRestaurants } = useContext(RestaurantContext);

	const fetchRestaurants = async () => {
		const response = await RestaurantFinder.get("/");
		setRestaurant(response.data.data.restaurants);
	};

	useEffect(() => {
		try {
			fetchRestaurants();
		} catch (error) {}
	}, []);

	const deleteRestaurant = async(id) => {
		try {
			const response = await RestaurantFinder.delete(`/${id}`);
			console.log(response);
			deleteRestaurants(id);
		} catch (error) {
			
		}
	}

	return (
		<section className="list-group">
			<table className="table table-hover table-dark table-responsive">
				<thead className="thead-primary">
					<tr>
						<th scope="col">Restaurant</th>
						<th scope="col">Location</th>
						<th scope="col">Price range</th>
						<th scope="col">Ratings</th>
						<th scope="col">Edit</th>
						<th scope="col">Delete</th>
					</tr>
				</thead>
				<tbody>
					{restaurants && restaurants.map((restaurant) => {
						return (
							<tr key={restaurant.id}>
								<td>{restaurant.name}</td>
								<td>{restaurant.location}</td>
								<td>{"$".repeat(restaurant.rate_range)}</td>
								<td>reviews</td>
								<td>
									<button className="btn btn-warning" onClick={() => deleteRestaurant(restaurant.id)}>Update</button>
								</td>
								<td>
									<button className="btn btn-danger" onClick={() => deleteRestaurant(restaurant.id)}>Delete</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</section>
	);
};
export default Table;
