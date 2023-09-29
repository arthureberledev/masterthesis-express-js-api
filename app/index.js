const express = require("express");
const app = express();

const users = require("./routes/users");
const products = require("./routes/products");
const orders = require("./routes/orders");

app.use(express.json());
app.use("/users", users);
app.use("/products", products);
app.use("/orders", orders);

app.get("/", (_req, res) => {
  res.send("Server is up and running");
});

module.exports = app;
