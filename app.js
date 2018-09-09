const express = require('express');
const bodyParser = require('body-parser');
const Blockchain = require('./components/blockchain');
const app = express();


const bitcoin = new Blockchain();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.get('/blockchain', (req, res) => {
  res.send(bitcoin);
});


app.post('/transaction', (req, res) => {
  const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
  res.json({ message: `The transaction will be added to the block ${blockIndex}`});
});

app.get('/mine', (req, res) => {

});



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
})