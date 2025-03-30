import express from "express";

const port = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

app.listen(port, () => {
  console.log("Server running on port 5000 in development mode...");
});
