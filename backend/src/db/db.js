// test-db.js
import "dotenv/config";
import pg from "pg";

const { Pool } = pg;

// Create a new connection pool
const pool = new Pool();

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

