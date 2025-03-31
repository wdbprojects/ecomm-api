import { Router } from "express";
import {
  createNewOrder,
  deleteOrderById,
  getAllOrders,
  getOrderById,
  updateOrderById,
} from "../controllers/order-controller";

const router = Router();

// GET ALL ORDERS
router.get("/", getAllOrders);
// GET ORDER BY ID
router.get("/:id", getOrderById);
// CREATE NEW ORDER
router.post("/", createNewOrder);
// UPDATE ORDER BY ID
router.put("/:id", updateOrderById);
// DELETE ORDER BY ID
router.delete("/:id", deleteOrderById);

export default router;
