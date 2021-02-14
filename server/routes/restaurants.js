const router = require("express").Router();
const db = require("../db");

router.get("/restaurant", async (req, res) => {
	const { rows } = await db.query("SELECT * FROM restaurant");
	return res.status(200).json({ data: {restaurants: rows} });
});

router.get("/restaurant/:id", async (req, res) => {
	const { id } = req.params;
	const { rows } = await db.query("SELECT * FROM restaurant WHERE id = $1", [
		id,
	]);
	return res.status(200).json({ data: rows[0] });
});

router.delete("/restaurant/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const result = await db.query("DELETE FROM restaurant WHERE id = $1", [id]);
		return res.status(204).json({ status: "erased" });
	} catch (error) {
		console.log(error);
	}
});

router.put("/restaurant/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const body = req.body;
		const params = [...id, ...Object.values(body)];
		const result = await db.query(
			"UPDATE restaurant SET name=$2 , location=$3, rate_range=$4 WHERE id = $1",
			params
		);
		return res.status(200).json({ status: "updated" });
	} catch (error) {
		console.log(error);
	}
});

router.post("/restaurant", async (req, res) => {
	const body = req.body;
	const params = Object.values(body);
	try {
		const {rows} = await db.query(
			"INSERT INTO restaurant(name, location, rate_range) VALUES($1, $2, $3) RETURNING *",
			params
		);
		return res.status(201).json({ data: rows[0] });
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
