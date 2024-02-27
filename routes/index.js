const v1_routes = app => {
  app.use('/v1/customer', require('./v1/customer'));
};

module.exports = { v1_routes };
