const Joi = require('joi');
function validateLoginRequest(user) {
  const schema = Joi.object({
    email: Joi.string().required().email({ minDomainSegments: 2 }).trim(),
    password: Joi.string()
      .min(8)
      .pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/
      )
      .messages({
        'string.pattern.base':
          'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
      })
  });

  return schema.validate(user);
}
function validateSignUpRequest(user) {
  const schema = Joi.object({
    name: Joi.string().required().trim(),
    email: Joi.string().required().email({ minDomainSegments: 2 }).trim(),
    password: Joi.string()
      .min(8)
      .pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/
      )
      .messages({
        'string.pattern.base':
          'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
      })
  });

  return schema.validate(user);
}
module.exports = {
  validateLoginRequest,
  validateSignUpRequest
};
