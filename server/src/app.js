const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(cors());
app.use(bp.json());

app.post('/register', (req, res) => {
  res.send({ msg: `${req.body.email} was REGISTERED!!!` });
});

app.listen(process.env.port || 8001);
