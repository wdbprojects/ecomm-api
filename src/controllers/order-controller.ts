import { type Request, type Response } from "express";

// INFO: Get all orders
export const getAllOrders = (req: Request, res: Response) => {
  res.status(200).json({ message: "GET all orders" });
};
// INFO: Get single order
export const getSingleOrder = (req: Request, res: Response) => {
  res.status(200).json({ message: `Get single order by ID: ${req.params.id}` });
};
// INFO: Create new order
export const createNewOrder = (req: Request, res: Response) => {
  res.status(200).json({ message: "New order created", body: req.body });
};
// INFO: Update order
export const updateOrder = (req: Request, res: Response) => {
  res.status(200).json({
    message: `Product updated with ID: ${req.params.id}`,
  });
};
// INFO: Delete order
export const deleteOrder = (req: Request, res: Response) => {
  res.status(200).json({ message: "Order deleted" });
};
