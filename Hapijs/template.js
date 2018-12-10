'use strict';

const Hapi = require('hapi');

const server = Hapi.server({ port: 8080 });

const start = async () => {

    await server.register(require('vision'));

    server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'templates',
        helpersPath: 'helpers'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, h) {

            return h.view('index');
        }
    });
};

start();