const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(cors());
app.use(bp.json());

app.get('/status', (req, res) => {
  res.send({ msg: 'hello world' });
});

app.listen(process.env.port || 8001);
