import { type Request, type Response } from "express";
import { db } from "../db/index";
import { productsTable } from "../db/schema";
import { eq } from "drizzle-orm";

// INFO: Get all products
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await db.select().from(productsTable);
    if (products.length === 0) {
      throw new Error("No products found to display");
    }
    res.status(200).json({ message: "List of products", data: products });
  } catch (error) {
    res.status(400).json({ message: `${error}` });
  }
};
// INFO: Get single product
export const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const product = await db
      .select()
      .from(productsTable)
      .where(eq(productsTable.id, Number(req.params.id)));
    if (product.length === 0) {
      throw new Error("Product not found");
    }
    res.status(200).json({ message: "Get single product", data: product });
  } catch (error) {
    res.status(404).json({ message: `Error: ${error}` });
  }
};
// INFO: Create new product
export const createNewProduct = async (req: Request, res: Response) => {
  try {
    const [product] = await db
      .insert(productsTable)
      .values(req.body)
      .returning();
    console.log(product);
    res.status(201).json({ message: "New product created", body: req.body });
  } catch (error) {
    res.status(400).json({ message: "Some error ocurred" });
  }
};
// INFO: Update product
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const updatedProduct = await db
      .update(productsTable)
      .set(req.body)
      .where(eq(productsTable.id, Number(req.params.id)))
      .returning();
    if (updatedProduct.length === 0) {
      throw new Error("Product not found for update");
    }
    res.status(200).json({
      message: `Product updated`,
      data: updatedProduct,
    });
  } catch (error) {
    res.status(400).json({ message: `${error}` });
  }
};
// INFO: Delete product
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const deletedProduct = await db
      .delete(productsTable)
      .where(eq(productsTable.id, Number(req.params.id)))
      .returning();

    console.log(deletedProduct);

    if (deletedProduct.length === 0) {
      throw new Error("Product not found for deletion");
    }
    res
      .status(200)
      .json({ message: `Product with ID ${productsTable.id} deleted` });
  } catch (error) {
    res.status(404).json({ message: `${error}` });
  }
};
