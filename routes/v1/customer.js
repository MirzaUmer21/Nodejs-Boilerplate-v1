const express = require('express');
const { register_route } = require('../../helpers/register-routes');
const {
  loginCustomer,
  signupCustomer
} = require('../../controllers/customer/customer-auth-controllers');

const router = express.Router();

const routes = [
  // {
  //   route: '/',
  //   auth_enable: true,
  //   methods: [
  //     { method: 'GET', handler: (req, res) => res.send('Hello, World!') }
  //   ]
  // },
  {
    route: '/login',
    auth_enable: true,
    methods: [{ method: 'POST', handler: loginCustomer }]
  },
  {
    route: '/sign-up',
    auth_enable: true,
    methods: [{ method: 'POST', handler: signupCustomer }]
  }
];
register_route(router, routes);
module.exports = router;
