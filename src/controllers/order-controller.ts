import { type Request, type Response } from "express";

export const getAllOrders = (req: Request, res: Response) => {
  res.status(200).json({ message: "healthy orders GET" });
};
export const getOrderById = (req: Request, res: Response) => {
  res
    .status(200)
    .json({ message: `healthy get single order with ID: ${req.params.id}` });
};
export const createNewOrder = (req: Request, res: Response) => {
  console.log(req.body);

  res.status(200).json({ message: "healthy create new order" });
};
export const updateOrderById = (req: Request, res: Response) => {
  res.status(200).json({
    message: `healthy update single order with ID: ${req.params.id}`,
  });
};
export const deleteOrderById = (req: Request, res: Response) => {
  res.status(200).json({
    message: `healthy delete single order with ID: ${req.params.id}`,
  });
};
