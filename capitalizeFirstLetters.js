// capitalizeFirst.js

const assert = require('assert');

function capitalizeFirst(input) {
  console.log(input);
  return input.length > 0 // si l'input est > 0
    ? input
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(' ')
    : '';
}

// Check that capitalizeFirst transforms javaScript correctly

assert.strictEqual(
  capitalizeFirst('bonjour les copains vous allez bien'),
  'Bonjour Les Copains Vous Allez Bien'
);

// Check that it works for a 1-character string

assert.strictEqual(capitalizeFirst('tutu'), 'Tutu');

// Check that it works for an empty string

assert.strictEqual(capitalizeFirst(''), '');
