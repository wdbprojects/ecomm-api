import express from "express";
const PORT = process.env.PORT;
const app = express();
app.get("/", (req, res) => {
    res.send("Healthy Check!");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
