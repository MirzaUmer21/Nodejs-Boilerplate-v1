const register_route = (router, routes = []) => {
  routes.forEach(({ route, auth_enable = false, methods = [] }) => {
    let middleware = [];
    methods.forEach(({ method, handler }) => {
      if (!method || !handler) return;
      router[method.toLowerCase()](route, ...middleware, handler);
    });
  });
};
module.exports = {
  register_route
};
