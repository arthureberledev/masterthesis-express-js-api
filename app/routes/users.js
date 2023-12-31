const express = require("express");
const router = express.Router();
const pool = require("../services/db");

router.get("/", (_req, res) => {
  pool.query("SELECT * FROM users", (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send("Database error");
    }
    res.json(results);
  });
});

router.get("/:id", (req, res) => {
  pool.query(
    "SELECT * FROM users WHERE id = ?",
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
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [req.body.name, req.body.email],
    (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).send("Database error");
      }
      res.status(201).json({ id: results.insertId, ...req.body });
    }
  );
});

router.patch("/:id", (req, res) => {
  pool.query(
    "UPDATE users SET email = ? WHERE id = ?",
    [req.body.email, req.params.id],
    (error, _results) => {
      if (error) {
        console.error(error);
        return res.status(500).send("Database error");
      }
      res.json({ id: req.params.id, ...req.body });
    }
  );
});

// router.put("/:id", (req, res) => {
//   pool.query(
//     "UPDATE users SET name = ? WHERE id = ?",
//     [req.body.name, req.params.id],
//     (error, _results) => {
//       if (error) {
//         console.error(error);
//         return res.status(500).send("Database error");
//       }
//       res.json({ id: req.params.id, ...req.body });
//     }
//   );
// });

router.delete("/:id", (req, res) => {
  pool.query(
    "DELETE FROM users WHERE id = ?",
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
