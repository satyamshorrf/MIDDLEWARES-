const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");



const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    }
    throw new ExpressError(401,"ACCESS DANIED!");
};

app.get("/api", checkToken, (req, res) => {
    res.send("data");
});



app.get("/", (req, res) => {
    res.send("Hi, I am root.");
});

app.get("/random", (req, res) => {
    res.send("this is a random page");
});

app.get("/err", (req, res) => {
    abcd = abcd;
});

app.get("/admin", (req, res) => {
    throw  new ExpressError(403, "Access is admin is Forbidden");
 
});

app.use((err, req, res, next) => {
  let { status = 500, message = "Some Error Occrured"} = err;
    res.status(status).send(message);
});



// app.use((req, res) => {
//     res.send("page not found!");
// });

app.listen(8080, () => {
    console.log("Listening to port 8080");
});


