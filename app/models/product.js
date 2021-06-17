import mongoose from "mongoose";
import * as uuid from "uuid";
import validator from "validator";

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: [true, "Product is already Exist"],
		required: [true, "Product Name is required"],
		validate: {
			validator: (v) => /^[a-z0-9 ]+$/i.test(v),
			message: "Product name may only contain letters, numbers, and spaces",
		},
		trim: true,
	},
	amount: {
		type: String,
		required: [true, "Product Amount is required"],
		validate: [validator.isNumeric, "Product Amount only contain numbers"],
	},
	warehouse: [
		{
			type: mongoose.Schema.Types.ObjectId,
			required: [true, "Warehouse is required"],
			ref: "warehouse",
		},
	],
});

const product = mongoose.model("product", productSchema);

export default product;
