const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.post('/bmi', function(req, res) {
    var height = req.body.height;
    var weight = req.body.weight;

    var result = weight/height*2;
    res.json({"Message":"Success","Result":result});
});

app.listen(3000, function() {
    console.log("Listining on port 3000");
});
