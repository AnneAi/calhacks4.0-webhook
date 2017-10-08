const additions = require('./additions');
const integers = require('./integers');
const subtractions = require('./subtractions');
const wholeNumbers = require('./wholeNumbers');

const database = {
  'additions': additions,
  'integers': integers,
  'subtractions': subtractions,
  'whole numbers': wholeNumbers
};

module.exports = database;
