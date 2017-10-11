const additions = require('./additions');
const digits = require('./digits');
const integers = require('./integers');
const numbers = require('./numbers');
const subtractions = require('./subtractions');
const wholeNumbers = require('./wholeNumbers');

const database = {
  'additions': additions,
  'digits': digits,
  'integers': integers,
  'numbers': numbers,
  'subtractions': subtractions,
  'whole numbers': wholeNumbers
};

module.exports = database;
