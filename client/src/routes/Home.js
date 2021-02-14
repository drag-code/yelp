import React from "react";
import AddRestaurant from "../components/AddRestaurant";
import Table from "../components/Table";
import Header from "../components/Header";

const Home = () => {
	return (
		<div>
			<Header />
			<AddRestaurant />
			<Table />
		</div>
	);
};
export default Home;
