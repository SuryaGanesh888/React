// server.cjs
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

// Serve static files from dist
app.use(express.static(path.join(__dirname, "dist")));

// SPA fallback: redirect all unmatched routes to index.html
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});