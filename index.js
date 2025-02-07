const express = require('express');
const { resolve } = require('path');
let cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
    let marketPrice = parseFloat(req.query.marketPrice);
    let quantity = parseInt(req.query.quantity);
    let returns = (marketPrice - boughtAt) * quantity;
    res.send(returns.toString());
});

app.get('/total-returns', (req, res)=>{
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  const totalReturns = stock1 + stock2 + stock3 + stock4;
  res.send(totalReturns.toString());
});

app.get('/calculate-return-percentage', (req, res) => {
  const boughtAt = parseFloat(req.query.boughtAt);
  const returns = parseFloat(req.query.returns);
  const returnPercentage = (returns / boughtAt) * 100;
  res.send(returnPercentage.toString());
});

app.get('/total-return-percentage', (req, res) => {
  const stock1 = parseFloat(req.query.stock1);
  const stock2 = parseFloat(req.query.stock2);
  const stock3 = parseFloat(req.query.stock3);
  const stock4 = parseFloat(req.query.stock4);
  const totalInvestment = stock1 + stock2 + stock3 + stock4;
  const totalReturnPercentage = (totalInvestment / 100) * 100;
  res.send(totalReturnPercentage.toString());
});

app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);
  let status = returnPercentage > 0 ? 'profit' : 'loss';
  res.send(status);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
