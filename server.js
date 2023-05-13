const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended : true}));
// Alternatively, you can use app.use(express.json());

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

app.post("/", function (req, res) {
    console.log(req.body);
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;
    res.send("Your answer is " + result);
});

app.listen(3000, () => console.log("Listening on port 3000..."));
