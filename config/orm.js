var connection  = require("./connection.js");

var burgers {
    selectAll: function() {
        console.log("Got in the selectAll function");
    },
    insertOne: function() {
        console.log("Got in the insertOne function");
    },
    updateOne: function() {
        console.log("Got in the updateOne function");
    }
}

exports.burgers = burgers;
