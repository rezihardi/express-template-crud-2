let mysql = require('mysql');


// mysql
// let con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "pos_db"
// });

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;