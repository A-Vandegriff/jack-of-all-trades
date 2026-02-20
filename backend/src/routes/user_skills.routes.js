import { Router } from "express";
import pool from "../db/db.js";

const router = Router();

router.get("/", async (req, res) => {
	try{
		const result = await pool.query(
		`SELECT skill_id AS skill_id,
		user_id AS id
		FROM user_skills ORDER BY user_id ASC`
		);
	res.json(result.rows);
	} catch (err){
	console.log(err);
	res.status(500).json({ error: err.message });
	}

})

export default router;


