const exercises = [
  {
    level: 1,
    wording: 'Is 2 a digit?',
    choices: [ 'yes', 'no'],
    answer: 0,
    explanation: 'A digit is a single symbol used to make numerals (0, 1, 2, 3, 4, 5, 6, 7, 8 and 9 are the ten digits we use in everyday numerals) so 3 is a digit'
  },
  {
    level: 2,
    wording: 'Is 39 a digit?',
    choices: [ 'yes', 'no'],
    answer: 1,
    explanation: 'A digit is a single symbol used to make numerals (0, 1, 2, 3, 4, 5, 6, 7, 8 and 9 are the ten digits we use in everyday numerals) so 39 is not a digit'
  },
  {
    level: 3,
    wording: 'Is 1.2 a digit?',
    choices: [ 'yes', 'no'],
    answer: 1,
    explanation: 'A digit is a single symbol used to make numerals (0, 1, 2, 3, 4, 5, 6, 7, 8 and 9 are the ten digits we use in everyday numerals) so 1.2 is not a digit because it has a decimal part'
  }
];

module.exports = exercises;
