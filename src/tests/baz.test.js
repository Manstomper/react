const baz = require('../utils/baz').baz;

test('1 + 1', () => {
  expect(baz(1, 1)).toBe(2);
});

test('1 + \'1\'', () => {
  expect(baz(1, '1')).toBe(2);
});

test('-2 + 3', () => {
  expect(baz(-2, 3)).toBe(1);
});
