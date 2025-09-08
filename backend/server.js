const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const productsRoute = require("./routes/products");
app.use("/api/products", productsRoute);

// Default Route
app.get("/", (req, res) => {
  res.send("Fashion Shop API is running...");
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
