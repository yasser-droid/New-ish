const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/api/info", (req, res) => {
    res.json({ 
        message: "Hello from Node 22 on Azure!", 
        node: process.version,
        uptime: process.uptime()
    });
});

app.listen(port, () => console.log("Server running on port " + port));
