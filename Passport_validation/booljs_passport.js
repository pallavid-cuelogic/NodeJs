'use strict';
 
module.exports = function (app) {
    var Bearer          = app.utilities['passport-http-bearer']
    ,   Token           = app.dao.Token
    ,   User            = app.dao.User;
 
    this.bearer = function (passport) {
        function convertUser(user, done) { done(null, user); }
        passport.serializeUser(convertUser);
        passport.deserializeUser(convertUser);
 
        return new Bearer.Strategy(function (accessToken, done) {
            var token = new Token()
            ,   user  = new User();
 
            return token.find(accessToken).then((_token) => {
                return _token && user.find(_token.user) || false;
            }).then((_user) => {
                done(null, _user || false);
            }).catch(done);
        });
    };
 
};

var booljs = require('bool.js');
 
(booljs('com.example.api', [ 'booljs-passport', 'passport-http-bearer' ])
    .setServerLoader('booljs-express')
    .setDatabaseLoader('booljs-mongoose')
    .run()
);
