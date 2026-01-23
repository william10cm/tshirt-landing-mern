const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("Mongo connection error:", err));

  //Your current IP address (107.77.226.65)
  //wac11mendoza_db_user
  //pS5KQ5D5yzERMFwF

  //mongodb+srv://wac11mendoza_db_user:pS5KQ5D5yzERMFwF@cluster0.u4jheuk.mongodb.net/?appName=Cluster0
