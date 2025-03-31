import express from "express";
const port = process.env.PORT;
import productRoutes from "./routes/product-routes";
import orderRoutes from "./routes/order-routes";
const app = express();

app.get("/api/v1", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

// INFO: ROUTES */
// NOTE: Product routes
app.use("/api/v1/products", productRoutes);

// NOTE: Order routes
app.use("/api/v1/orders", orderRoutes);

app.listen(port, () => {
  console.log("Server running on port 5000 in development mode...");
});
