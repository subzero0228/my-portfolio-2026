import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

// Recreate __dirname for ES Module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

app.get("/work", (req, res) => {
  res.render("work-listing.ejs");
});


app.get("/work-single", (req, res) => {
  res.render("work-single.ejs");
});


app.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "files", "resume.pdf");

  res.download(filePath, "resume.pdf", (err) => {
    if (err) {
      console.error("Error downloading file:", err);
      if (!res.headersSent) {
        res.status(404).send("File not found");
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});