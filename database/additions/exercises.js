const exercises = [
  {
    level: 1,
    wording: 'What is 11+8?',
    choices: [ '23', '19' ,'14'],
    answer: 1,
    explanation: 'You can count up to add. It is easier to start with the larger number. Start from 11 and count up 8: 11, 12, 13, 14, 15, 16, 17, 18, 19. The sum is 19'
  },
  {
    level: 2,
    wording: 'What is 21+12?',
    choices: [ '33', '32' ,'34'],
    answer: 0,
    explanation:'You can count up to add. It is easier to start with the larger number. Start from 21 and count up 12: 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33. The sum is 33'
  },
  {
    level: 3,
    wording: 'What is 228+191?',
    choices: [ '400', '411' ,'312'],
    answer: 1,
    explanation: ''
  }
];

module.exports = exercises;
