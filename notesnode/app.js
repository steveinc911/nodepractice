console.log("stating app.js");

const notes = require('./notes.js');
const _ = require('lodash');

console.log(_.isString(true));

console.log('Result:', notes.add(9, -2));
