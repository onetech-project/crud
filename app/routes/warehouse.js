import { Router } from "express";
import warehouse from "../controllers/warehouse.js";

const router = Router();

router.get("/", warehouse.find);

router.get("/:_id", warehouse.findById);

router.post("/", warehouse.add);

router.put("/:_id", warehouse.update);

router.delete("/:_id", warehouse.drop);

export default router;
