import { Router } from "express";

const router = Router();

// GET ALL ORDERS
router.get("/", (req, res) => {
  res.status(200).json({ message: "healthy orders GET" });
});
// GET ORDER BY ID
router.get("/:id", (req, res) => {
  res
    .status(200)
    .json({ message: `healthy get single order with ID: ${req.params.id}` });
});
// CREATE NEW ORDER
router.post("/", (req, res) => {
  res.status(200).json({ message: "healthy create new order" });
});
// UPDATE ORDER BY ID
router.put("/:id", (req, res) => {
  res.status(200).json({
    message: `healthy update single order with ID: ${req.params.id}`,
  });
});
// DELETE ORDER BY ID
router.delete("/:id", (req, res) => {
  res.status(200).json({
    message: `healthy delete single order with ID: ${req.params.id}`,
  });
});

export default router;
