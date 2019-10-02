'use strict';
const connection = require('../config/connection');
const bcrypt = require('crypto');

var User = class {
    getUser(req, res) {
        let sql = "SELECT * FROM user_tbl";
        connection.query(sql, (err, results) => {
            if(err) throw err;
            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        });
    }

    login(req, res) {
        var username = req.body.username;
        var password =  bcrypt.createHash('md5').update(req.body.password).digest("hex");
        console.dir(password, username);
        if (username && password) {
            connection.query('SELECT * FROM account WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
                if (results.length > 0) {
                    req.session.loggedin = true;
                    req.session.username = username;
                    res.redirect('/home');
                } else {
                    res.send('Incorrect Username and/or Password!');
                }
                req.end();
            });
        } else {
            res.send('Please enter Username and Password!');
            res.end();
        }
    }
};

// var temp = new User();
// console.log(temp.getUser());
module.exports = new User();
// export const user = new User();