import { type Request, type Response } from "express";

export const getAllProducts = (req: Request, res: Response) => {
  res.status(200).json({ message: "healthy products GET" });
};
export const getProductById = (req: Request, res: Response) => {
  res
    .status(200)
    .json({ message: `healthy get single product with ID: ${req.params.id}` });
};
export const createNewProduct = (req: Request, res: Response) => {
  console.log(req.body);

  res.status(200).json({ message: "healthy create new product" });
};
export const updateProductById = (req: Request, res: Response) => {
  res.status(200).json({
    message: `healthy update single product with ID: ${req.params.id}`,
  });
};
export const deleteProductById = (req: Request, res: Response) => {
  res.status(200).json({
    message: `healthy delete single product with ID: ${req.params.id}`,
  });
};
