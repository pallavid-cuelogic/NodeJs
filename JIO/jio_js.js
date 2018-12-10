const Joi = require('joi')

module.exports = Joi.object().keys({
  username: Joi.string(),
  rating: Joi.number().integer().min(1).max(5).default(5),
  email: Joi.string().email().required()
})