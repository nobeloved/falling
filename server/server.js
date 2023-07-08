const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

app.get("/api", (req, res) => {
  res.json({ message: "Test server hello." });
});