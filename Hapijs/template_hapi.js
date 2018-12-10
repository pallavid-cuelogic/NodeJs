'use strict';

const Path = require('path');
const Hapi = require('hapi');
const Hoek = require('hoek');

const server = Hapi.server();

const start = async () => {

    await server.register(require('vision'));

    server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'templates'
    });
};

start();