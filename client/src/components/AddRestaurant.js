import React, {useState, useContext} from "react";
import RestaurantFinder from '../apis/RestaurantFinder';
import {RestaurantContext} from '../context/RestaurantContext';

function AddRestaurant() {

	const {addRestaurants} = useContext(RestaurantContext);
	const [name, setName] = useState("");
	const [location, setLocation] = useState("");
	const [priceRange, setPriceRange] = useState("");

	const addRestaurant = async (e) => {
		e.preventDefault();
		try {
			const {data} = await RestaurantFinder.post("/", {
				name, location, priceRange
			});
			addRestaurants(data.data);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="mb-4">
			<form method="POST">
				<div className="row">
					<div className="col-3">
						<input type="text" className="form-control" placeholder="name" onChange={ e => setName(e.target.value)} value={name} required/>
					</div>
					<div className="col-3">
						<input
							type="text"
							className="form-control"
							placeholder="location"
							onChange={ e => setLocation(e.target.value)} 
							value={location}
						/>
					</div>
					<div className="col-3">
						<select className="custom-select my-1 mr-sm-2 col-12" onChange={ e => setPriceRange(e.target.value)} value={priceRange}>
							<option disabled>Price range</option>
							<option value="1">$</option>
							<option value="2">$$</option>
							<option value="3">$$$</option>
							<option value="4">$$$$</option>
							<option value="5">$$$$$</option>
						</select>
					</div>
					<div className="col">
						<button id="add" type="submit" className="btn btn-primary" onClick={ addRestaurant }>
							Add
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}
export default AddRestaurant;
