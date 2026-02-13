// I learned that hooks defined in the describe block only apply to tests defined in that block
beforeEach(() => {
    console.log("Global beforeEach()");
});

afterEach(() => {
    console.log("Global afterEach()");
});

describe('Group A', () => {
    beforeEach(() => {
        console.log('Group A beforeEach()');
    });

    afterEach(() => {
        console.log('Group A afterEach()');
    });

    test('Test 1', () => {
        console.log('Executing Test 1');
        expect(true).toBe(true);
    });
});

describe('Group B', () => {
    test('Test 2', () => {
        console.log('Executing Test 2');
        expect(true).toBe(true);
    });
});

