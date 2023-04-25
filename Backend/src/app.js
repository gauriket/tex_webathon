const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const hbs = require("hbs");
require("./db/conn");
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.get("/",(req, res) => {
    res.render("homepage.hbs");
});

app.get("/cart",(req, res) => {
    res.render("cart.hbs");
});

app.get("/login",(req, res) => {
    res.render("login.hbs");
});

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});