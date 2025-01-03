import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const time = new Date().getHours();
const blogList = []

const creds = {
    mail : "xxxx@gmail.com",
    pass : "12345678"
}

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port , () => {
    console.log(`i am working on port ${port}`);
});

app.get("/" , (req , res) => {
    res.render("index.ejs");
});

app.get("/login" , (req , res) => {
    res.render("login.ejs")
});

app.post("/login" , (req , res) => {
    if (req.body.mail === creds.mail && req.body.pass === creds.pass ){
        res.render("main.ejs" , {
            time: time,
            blog: blogList
        });
    }
});

app.get("/home" , (req , res) => {
    res.render("index.ejs");
});

app.get("/blog" , (req , res) => {
    res.render("blog.ejs");
});

app.post("/submit" , (req , res) => {
    blogList.push(req.body);
    res.redirect("/main");
});

app.get("/main" , (req , res) => {
    res.render("main.ejs" , {
        time: time,
        blog: blogList
    });
});
