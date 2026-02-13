const { initialize, increment, getCounter } = require('./counter');

beforeAll(() => {
  // Runs once before all tests
  initialize();
});

test('first test', () => {
  increment();
  expect(getCounter()).toBe(11);
});

test('second test', () => {
  increment();
  expect(getCounter()).toBe(12);
});
