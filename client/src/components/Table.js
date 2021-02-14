import React from "react";

function Table() {
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
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>
			</table>
		</section>
	);
}
export default Table;
