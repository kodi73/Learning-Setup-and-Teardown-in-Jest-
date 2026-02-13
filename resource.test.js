// I learned to apply beforeAll and afterAll
// They can be used for opening a resource or closing a resource.
 
const { openResource, closeResource, isConnected } = require('./resource');

beforeAll(() => {
    // open reource for running tests
    openResource();
});

afterAll(() => {
    // CLose resource after tests are completed
    closeResource();
});

test('resource should be connected', () => {
    expect(isConnected()).toBe(true);
})