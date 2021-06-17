import { Router } from "express";
import product from "../controllers/product.js";

const router = Router();

router.get("/", product.find);

router.get("/:_id", product.findById);

router.post("/", product.add);

router.put("/:_id", product.update);

router.delete("/:_id", product.drop);

export default router;
