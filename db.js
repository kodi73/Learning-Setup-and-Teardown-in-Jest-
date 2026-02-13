// I am testing beforeEach with Asynchronous Setup like accessing a database.

let db = [];

// returns a resolved Promise confirming that the
// database has been initialized.
function initializeDatabase() {
    return new Promise(resolve => {
        setTimeout(() => {
            db = ['initial'];
            resolve();
        }, 100);
    });
}

// getter method for the database.
function getDB() {
    return db;
}

module.exports =  {initializeDatabase, getDB};