import express from "express";
import {
  createNewProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
} from "../controllers/product-controller";
const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);
router.post("/", createNewProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
