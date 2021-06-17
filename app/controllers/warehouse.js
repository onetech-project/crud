import warehouseModel from "../models/warehouse.js";
import productModel from "../models/product.js";

const add = async (req, res, next) => {
	try {
		const warehouse = await warehouseModel.create(req.body);
		res.status(201).send(warehouse);
	} catch (error) {
		next(error);
	}
};

const find = async (req, res, next) => {
	try {
		const warehouse = await warehouseModel.find();
		res.status(200).send(warehouse);
	} catch (error) {
		next(error);
	}
};

const findById = async (req, res, next) => {
	try {
		const { _id } = req.params;
		const warehouse = await warehouseModel.findOne({ _id });
		const products = await productModel.find({ warehouse: _id });
		res.status(200).send({ ...warehouse._doc, products });
	} catch (error) {
		next(error);
	}
};

const update = async (req, res, next) => {
	try {
		const { _id } = req.params;
		const warehouse = await warehouseModel.updateOne({ _id }, req.body);
		res.status(200).send(warehouse);
	} catch (error) {
		next(error);
	}
};

const drop = async (req, res, next) => {
	try {
		const { _id } = req.params;
		const warehouse = await warehouseModel.deleteOne({ _id });
		res.status(200).send(warehouse);
	} catch (error) {
		next(error);
	}
};

export default { add, find, findById, update, drop };
