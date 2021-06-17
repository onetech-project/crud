import express from "express";
import product from "./routes/product.js";
import warehouse from "./routes/warehouse.js";
import { ErrorHandler } from "./middlewares/ErrorHandler.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World"));
app.use("/product", product);
app.use("/warehouse", warehouse);

app.use(ErrorHandler);

export default app;
