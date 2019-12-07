const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}.`)
});

app.get("/home", (req, res) => {
    res.send("Home Page");
});

app.get("/reserve", (req, res) => {
    res.send("Reservations Page");
});

app.get("/tables", (req, res) => {
    res.send("Tables Page");
});
