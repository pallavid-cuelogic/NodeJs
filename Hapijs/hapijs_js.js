server.route({
    method: 'GET',
    path:'/hello',
    handler: function (request, h) {
      return 'Hello world!';
    }
  });