const express = require("express");
const router = express.Router();
const pool = require("../services/db");

router.get("/", (_req, res) => {
  pool.query("SELECT * FROM products", (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send("Database error");
    }
    res.json(results);
  });
});

router.get("/:id", (req, res) => {
  pool.query(
    "SELECT * FROM products WHERE id = ?",
    [req.params.id],
    (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).send("Database error");
      }
      res.json(results);
    }
  );
});

router.post("/", (req, res) => {
  pool.query(
    "INSERT INTO products (name, price) VALUES (?, ?)",
    [req.body.name, req.body.price],
    (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).send("Database error");
      }
      res.status(201).json({ id: results.insertId, ...req.body });
    }
  );
});

router.put("/:id", (req, res) => {
  pool.query(
    "UPDATE products SET name = ?, price = ? WHERE id = ?",
    [req.body.name, req.body.price, req.params.id],
    (error, _results) => {
      if (error) {
        console.error(error);
        return res.status(500).send("Database error");
      }
      res.json({ id: req.params.id, ...req.body });
    }
  );
});

router.delete("/:id", (req, res) => {
  pool.query(
    "DELETE FROM products WHERE id = ?",
    [req.params.id],
    (error, _results) => {
      if (error) {
        console.error(error);
        return res.status(500).send("Database error");
      }
      res.status(204).send();
    }
  );
});

module.exports = router;
