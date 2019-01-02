const joi = require('joi');

module.exports = {
  register(req, res, next) {
    const schema = {
      email: joi.string().email(),
      password: joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}$'))
    };

    const { error, value } = joi.validate(req.body, schema);
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          });
          break;
        case 'password':
          res.status(400).send({
            error:
              'Password must be b/t 8-32 characters and may only contain upper/lowercase letters and numbers'
          });
          break;
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          });
          break;
      }
    } else {
      next();
    }
  }
};
