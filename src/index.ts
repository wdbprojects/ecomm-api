import express, { urlencoded } from "express";
const PORT = process.env.PORT;
import productRoutes from "./routes/product-routes";
import orderRoutes from "./routes/order-routes";

const app = express();

// INFO: Middlewares
app.use(urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/v1", (req, res) => {
  res.status(200).json({ status: "Healthy" });
});

// INFO: Product routes
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/orders", orderRoutes);

// INFO: Order routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
