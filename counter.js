let counter = 0;

function initialize() {
    counter = 10;
}

function increment() {
    counter++;
}

function getCounter() {
    return counter;
}

module.exports = { initialize, increment, getCounter};