//builds application while server.js runs the application
//configure express, add middleware, register routes, define behavior etc.
//does not start server
import express from "express";
import usersRouter from "./routes/user.routes.js";

const app = express();
app.use(express.json);

app.get("/health", (req,res) => res.json({ok: true}));

app.use("/users", usersRouter);

export default app;


