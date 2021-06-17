import mongoose from "mongoose";
import * as uuid from "uuid";
import validator from "validator";

const warehouseSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: [true, "Warehouse is already Exist"],
		required: [true, "Warehouse Name is required"],
		validate: {
			validator: (v) => /^[a-z0-9 ]+$/i.test(v),
			message: "Warehouse name may only contain letters, numbers, and spaces",
		},
		trim: true,
	},
	address: {
		type: String,
		required: [true, "Warehouse address is required"],
		trim: true,
	},
});

const warehouse = mongoose.model("warehouse", warehouseSchema);

export default warehouse;
