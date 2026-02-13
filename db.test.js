const {initializeDatabase, getDB} = require("./db");
// import { initializeDatabase, getDB } from "./db"

beforeEach(() => {
    return initializeDatabase();
});

test('database initialized', () => {
    expect(getDB()).toContain('initial');
});

test('database still initialized', () => {
    expect(getDB()).toContain('initial');
});