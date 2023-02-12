const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
app.get("/", (req, res) => {
    res.render("home");
  });
  
  app.get("/services", (req, res) => {
    res.render("services");
  });
  
  app.get("/contact", (req, res) => {
    res.render("contact");
  });
  function verifyWorkingHours(req, res, next) {
    const currentDate = new Date();
    const day = currentDate.getDay();
    const hour = currentDate.getHours();
  
    if (day >= 1 && day <= 5 && hour >= 9 && hour <= 17) {
      next();
    } else {
      res.send("Our web application is only available during working hours (Monday to Friday, from 9 to 17)");
    }
  }
  
  app.use(verifyWorkingHours);
    