import express from "express";
import session from "express-session";
import { json, urlencoded } from "express";

const app = express();
app.use(json());
app.use(urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 10000 },
    rolling: true
  })
);

app.get("/", (req, res) => {
  let name = req.session.name;
  res.render("index.ejs", { name });
});

app.get("/age", (req, res) => {
  let age = req.session.age;
  res.render("age.ejs", { age });
});

app.get("/form", (req, res) => {
  res.render("form.ejs");
});

app.post("/submit-name", (req, res) => {
  console.log(`received ${req.body.name}`);
  req.session.name = req.body.name;
  req.session.age = req.body.age
  res.redirect("/");
});

app.post("/clear-session", (req, res) => {
    req.session.destroy();
    res.redirect("/")
});

app.listen(3000, () => {
  console.log("listening at port 3000");
});
