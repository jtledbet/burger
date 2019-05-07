
connection = require("connection.js");

var orm = {
    // Function that returns all table entries
    selectAll: function (tableInput, callback) {
        // Construct the query string that returns all rows from the target table
        var queryString = "SELECT * FROM " + tableInput + ";";

        // Perform the database query
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            // Return results in callback
            cb(result);
        });
    },

    // Function that insert a single table entry
    insertOne: function (table, cols, vals, callback) {},

    updateOne: function(table, objColVals, condition, callback) {}
}

// Export the orm object for use in other modules
module.exports = orm;