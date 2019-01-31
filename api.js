/* ===== Configure =========================================
|  API Service Port Configuration  |
|  =========================================================*/
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const { Blockchain, Block } = require('./simpleChain.js');
const chain = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* ===== GET Block  =========================================
|  GET Block endpoint using URL path with block height parameter  |
|  =========================================================*/
app.get('^/block/:blockId([0-9]+)', async (req, res) => {
  try {
    const response = await chain.getBlock(req.params.blockId);
    res.send(response);
  } catch (error) {
    res.status(404).json({
      status: 404,
      message: 'Block not found'
    });
  }
});

/* ===== POST Block  =========================================
| POST Block endpoint using key/value pair within request body  |
|  =========================================================*/
app.post('/block', async (req, res) => {
  let newBlock;

  newBlock = await chain.addBlock(req.body).catch(error => {});

  res.json(newBlock);
});

/* ===== server  =========================================
| Starting server  |
|  =========================================================*/
app.listen(8000, () => console.log('API listening on port 8000'));
app.get('/', (req, res) =>
  res.status(404).json({
    status: 404,
    message: 'Accepted endpoints: POST /block or GET /block/{BLOCK_HEIGHT}'
  })
);
