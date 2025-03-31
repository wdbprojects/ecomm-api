import { Router } from "express";
import {
  createNewProduct,
  deleteProductById,
  getAllProducts,
  getProductById,
  updateProductById,
} from "../controllers/product-controller";

const router = Router();

// GET ALL PRODUCTS
router.get("/", getAllProducts);
// GET PRODUCT BY ID
router.get("/:id", getProductById);
// CREATE NEW PRODUCT
router.post("/", createNewProduct);
// UPDATE PRODUCT BY ID
router.put("/:id", updateProductById);
// DELETE PRODUCT BY ID
router.delete("/:id", deleteProductById);

export default router;
