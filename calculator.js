const express = require("express");
const bodyParser = require("body-parser");
//by body-parser allows you to go into any route, by using it we can parse the http request that we get
//and then with urlencoded, we can get access to form data

const app = express();
// app.use(bodyParser.text())
// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
//urlencoded--> when we have to parse the information posted through html form
//extended: true allows us to post nested objects



app.get("/", function(req, res) {
    // res.sendFile("index.html");
    res.sendFile(__dirname + "/index.html");
    //__dirname redirects to the path where server is located and we can append the file there
});

app.post("/", function(req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The result of the calculation is " + result);
});

app.listen(3000, function() {
    console.log("Server is running at port 3000");
});

// BMI Calculator

app.get("/bmiCalculator", function(req, res) {
    //res.send("<h1>BMI Calculator</h1>");//only this will work, sendFile will not
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res) {
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    var bmi = ((weight / (height * height)) * 10000);
    res.send("Your BMI is " + bmi);
})