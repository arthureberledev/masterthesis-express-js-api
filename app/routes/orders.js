const express = require("express");
const router = express.Router();
const pool = require("../services/db");

router.get("/", (_req, res) => {
  pool.query("SELECT * FROM orders", (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send("Database error");
    }
    res.json(results);
  });
});

router.post("/", (req, res) => {
  pool.query(
    "INSERT INTO orders (user_id, product_id, quantity) VALUES (?, ?, ?)",
    [req.body.user_id, req.body.product_id, req.body.quantity],
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
    "UPDATE orders SET product_id = ?, quantity = ? WHERE id = ?",
    [req.body.product_id, req.body.quantity, req.params.id],
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
    "DELETE FROM orders WHERE id = ?",
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
