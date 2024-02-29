const Customer = require('../../models/customer/customer-schema');
const {
  validateLoginRequest,
  validateSignUpRequest
} = require('../../validations/auth-validations');

const loginCustomer = async (req, res, next) => {
  const { error } = validateLoginRequest(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const { email, password } = req.body;

  return res.status(200).json('hello');
};
const signupCustomer = async (req, res, next) => {
  const { error } = validateSignUpRequest(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const { name, email, password } = req.body;
  try {
    const isUserExists = await Customer.exists({ email });
    if (isUserExists) {
      const error = {
        status: 401,
        message: 'Email already exists.'
      };
      return next(error);
    }
    const customerToRegister = new Customer({
      name,
      email,
      password
    });
    const user = await customerToRegister.save();
    return res.status(200).json(user);
  } catch (error) {
    return next(error);
  }
};
module.exports = {
  loginCustomer,
  signupCustomer
};
