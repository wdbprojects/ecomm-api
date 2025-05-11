import { type Request, type Response } from "express";

// INFO: Get all products
export const getAllProducts = (req: Request, res: Response) => {
  res.status(200).json({ message: "GET all products" });
};
// INFO: Get single product
export const getSingleProduct = (req: Request, res: Response) => {
  res
    .status(200)
    .json({ message: `Get single product by ID: ${req.params.id}` });
};
// INFO: Create new product
export const createNewProduct = (req: Request, res: Response) => {
  res.status(200).json({ message: "New product created", body: req.body });
};
// INFO: Update product
export const updateProduct = (req: Request, res: Response) => {
  res.status(200).json({
    message: `Product updated with ID: ${req.params.id}`,
  });
};
// INFO: Delete product
export const deleteProduct = (req: Request, res: Response) => {
  res.status(200).json({ message: "Product deleted" });
};
