import { Router } from "express";
import pool from "../db/db.js";

const router = Router();

router.get("/", async (req, res) => {
	const result = await pool.query(
		"SELECT id, username, created_at FROM users ORDER BY is ASC"
	);

});
export default router;
