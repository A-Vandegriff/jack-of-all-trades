//runs the application while app.js builds the application
//import the app, choose a port, Start listening
import "dotenv/config";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
	console.log(`Server running; http://localhost:${PORT}`);
});














































































