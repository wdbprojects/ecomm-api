import { Router } from "express";

const router = Router();

// GET ALL PRODUCTS
router.get("/", (req, res) => {
  res.status(200).json({ message: "healthy products GET" });
});
// GET PRODUCT BY ID
router.get("/:id", (req, res) => {
  res
    .status(200)
    .json({ message: `healthy get single product with ID: ${req.params.id}` });
});
// CREATE NEW PRODUCT
router.post("/", (req, res) => {
  res.status(200).json({ message: "healthy create new product" });
});
// UPDATE PRODUCT BY ID
router.put("/:id", (req, res) => {
  res.status(200).json({
    message: `healthy update single product with ID: ${req.params.id}`,
  });
});
// DELETE PRODUCT BY ID
router.delete("/:id", (req, res) => {
  res.status(200).json({
    message: `healthy delete single product with ID: ${req.params.id}`,
  });
});

export default router;
