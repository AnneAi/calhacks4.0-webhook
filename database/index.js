const additions = require('./additions');
const integers = require('./integers');
const numbers = require('./numbers');
const subtractions = require('./subtractions');
const wholeNumbers = require('./wholeNumbers');

const database = {
  'additions': additions,
  'integers': integers,
  'numbers': numbers,
  'subtractions': subtractions,
  'whole numbers': wholeNumbers
};

module.exports = database;
