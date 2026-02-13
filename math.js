let value = 0;
// initial value

// setter method
function setValue(v) {
    value = v;
}

// increment value
function increment() {
    value++;
}

// getter method for value
function getValue() {
    return value;
}

module.exports =  {setValue, increment, getValue};