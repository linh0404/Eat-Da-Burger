var orm = require ("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    //The variabls cols and vals are arrays
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    updateOne: function(objColVals, condition, cb) {
        console.log('ORM', objColVals, condition)
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};


module.exports = burger;