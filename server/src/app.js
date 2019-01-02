const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./models');
const config = require('./config/config');

const app = express();
app.use(morgan('combined'));
app.use(cors());
app.use(bp.json());

require('./routes')(app);

sequelize.sync().then(() => {
  app.listen(config.port);
  console.log(`Server started on ${config.port}`);
});
