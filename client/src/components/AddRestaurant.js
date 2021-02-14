import React from "react";

function AddRestaurant() {
	return (
		<div className="mb-4">
			<form method="POST">
				<div className="row">
					<div className="col-3">
						<input type="text" className="form-control" placeholder="name" />
					</div>
					<div className="col-3">
						<input
							type="text"
							className="form-control"
							placeholder="location"
						/>
					</div>
					<div className="col-3">
						<select className="custom-select my-1 mr-sm-2">
							<option disabled>Price range</option>
							<option value="1">$</option>
							<option value="2">$$</option>
							<option value="3">$$$</option>
							<option value="4">$$$$</option>
							<option value="5">$$$$$</option>
						</select>
					</div>
					<div className="col">
						<button id="add" className="btn btn-primary">
							Add
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}
export default AddRestaurant;
