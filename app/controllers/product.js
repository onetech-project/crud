import productModel from "../models/product.js";

const add = async (req, res, next) => {
	try {
		const product = await productModel.create(req.body);
		res.status(201).send(product);
	} catch (error) {
		next(error);
	}
};

const find = async (req, res, next) => {
	try {
		const products = await productModel.find().populate("warehouse");
		res.status(200).send(products);
	} catch (error) {
		next(error);
	}
};

const findById = async (req, res, next) => {
	try {
		const { _id } = req.params;
		const product = await productModel.find({ _id }).populate("warehouse");
		res.status(200).send(product);
	} catch (error) {
		next(error);
	}
};

const update = async (req, res, next) => {
	try {
		const { _id } = req.params;
		const product = await productModel.updateOne({ _id }, req.body);
		res.status(200).send(product);
	} catch (error) {
		next(error);
	}
};

const drop = async (req, res, next) => {
	try {
		const { _id } = req.params;
		const product = await productModel.deleteOne({ _id });
		res.status(200).send(product);
	} catch (error) {
		next(error);
	}
};

export default { add, find, findById, update, drop };
