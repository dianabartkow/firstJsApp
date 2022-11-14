// Import libraries
const express = require("express");
const path = require("path");

// Create express instance (create server)
const app = express();

app.use("/static", express.static(path.resolve(__dirname, "src", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "src", "index.html"));
});

app.listen(process.env.PORT || 3100, () => console.log("Server running..."));