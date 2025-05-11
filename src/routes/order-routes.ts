import express from "express";
import {
  createNewOrder,
  deleteOrder,
  getAllOrders,
  getSingleOrder,
  updateOrder,
} from "../controllers/order-controller";

const router = express.Router();

router.get("/", getAllOrders);
router.get("/:id", getSingleOrder);
router.post("/", createNewOrder);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

export default router;
