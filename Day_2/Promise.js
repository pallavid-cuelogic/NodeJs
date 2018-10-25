//  npm install --save bluebird
//  npm install --save helper

const Promise = require('bluebird');
const helper = require('./helper');

//setup for the this context within the promise chain
const context = {
    options : {
        url : 'http://xyz.com/endpoint'
    }
};

//root promise chain
Promise
    .resolve()
    .bind(context)
    .then(helper.getFromXYZ)
    .then(helper.mapResult)
    .then(helper.validateResult)
    .catch(ValidationError, (error) => {
        console.warn('validation missed', error.msg);
        return this.mappedResult;
    })
    .catch(Error, (error) => {
        console.error(error);
    });