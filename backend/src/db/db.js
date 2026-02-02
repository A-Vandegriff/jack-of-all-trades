// test-db.js
import dotenv from "dotenv";
import pg from "pg";
import path from "path";

dotenv.config({ path: path.resolve("/home/av/projects/jack-of-all-trades/backend/.env") });

const { Pool } = pg;

// Create a new connection pool
const pool = new Pool({
	host: process.env.PGHOST,
	port: Number(process.env.PGPORT),
	database: process.env.PGDATABASE,
	user: process.env.PGUSER,
	password: process.env.PGPASSWORD,

});
console.log("PGPASSWORD:", process.env.PGPASSWORD);
async function testConnection() {
  try {
    // Run a simple query
    const res = await pool.query("SELECT NOW() AS current_time");
    console.log("✅ Connection successful!");
    console.log("Server time:", res.rows[0].current_time);
  } catch (err) {
    console.error("❌ Connection failed:", err.message);
  } finally {
    // Close the pool
    await pool.end();
  }
}

// Run the test
testConnection();

