import { setValue, increment, getValue } from './math.js';

// Runs before executing every test to prevent state sharing of global variables
beforeEach(() => {
    setValue(0);
})

// Runs after executing every test for cleanup tasks.
afterEach(() => {
    console.log('Test finished.');
})

// Increments value by one.
test('increment once', () => {
    increment();
    expect(getValue()).toBe(1);
});

// Increments value by 2.
// Note that the value returned should be 2 and not 3
// because of beforeEach().
test('increment twice', () => {
    increment();
    increment();
    expect(getValue()).toBe(2);
});
