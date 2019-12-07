const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}.`)
});


const reservations = [];
const waitlist = [];


// ===== ROUTING ======
app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"));
});
