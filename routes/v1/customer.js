const express = require('express');
const { register_route } = require('../../helpers/register-routes');

const router = express.Router();

const routes = [
  {
    route: '/',
    auth_enable: true,
    methods: [
      { method: 'GET', handler: (req, res) => res.send('Hello, World!') }
    ]
  }
];
register_route(router, routes);
module.exports = router;
