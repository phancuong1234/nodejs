
const connection = require('../config/connection');

const User = /** @class */ (function () {
  function User() {
  }
  User.prototype.getUser = function (req, res) {
    const sql = 'SELECT * FROM user_tbl';
    connection.query(sql, (err, results) => {
      if (err) throw err;
      res.send(JSON.stringify({ status: 200, error: null, response: results }));
    });
  };
  return User;
}());
// var temp = new User();
// console.log(temp.getUser());
module.exports = new User();
// # sourceMappingURL=user.js.map
