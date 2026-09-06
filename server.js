import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));  


app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/work", (req, res) => {
  res.render("work-listing.ejs");
});

app.get("/download", (req, res) => {
  res.render("work-listing.ejs");
});




app.listen(3000, () => {
  console.log(`Server is running on port ${port}`);
}); 