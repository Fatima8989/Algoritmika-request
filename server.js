const express = require('express');
const app = express();

const products = [ 
  { price:"56$", name:"jacket" , amount: "456", id: 7 },
  { price:"2$", name:"apple", amount: "678", id: 34 },
  { price:"45$", name:"glass" ,amount: "789", id: 5 },
  { price:"23$", name:"board" ,amount: "890", id: 15 },
  { price:"12$", name:"sign" ,amount: "345", id: 56 },
  { price:"4$", name:"lamp" ,amount: "567", id: 4 },
  { price:"67$", name:"phone" ,amount: "254", id: 25 },
  { price:"14$", name:"wallet" ,amount: "765", id: 34 },
  { price:"5$", name:"juice" ,amount: "987", id: 9 },
  { price:"34$", name:"hat" ,amount: "654", id: 43 }
 ];


app.get("/product/:id", function (req, res) {
  res.send(JSON.stringify(products.find((product) => product.id == req.params.id)));

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});