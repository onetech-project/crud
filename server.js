import app from "./app/app.js";
import { config } from "dotenv";
import mongoose from "mongoose";

config();

const { PORT, MONGODBURL } = process.env;

mongoose.connect(
	MONGODBURL,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: true,
	},
	(err) => {
		if (err) throw err;
		console.log("Database Connected");
	}
);

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
