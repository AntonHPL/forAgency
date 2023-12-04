const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "Anton",
  password: "pDJ@[Uc)XrwxOPxQ",
  database: "test",
})

const getData = (req, res) => {
  const sql = "SELECT * FROM list";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
};

const updateUser = (req, res) => {
  const sql = `UPDATE users SET password="${req.body.password}" WHERE login="${req.body.login}"`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(true);
    }
  })
};

const checkUser = (req, res) => {
  const sql = `SELECT * FROM users WHERE login="${req.body.login}"`;
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    if (data[0]?.password && data[0].password === req.body.password) {
      return res.json({
        login: data[0].login,
        id: data[0].id,
        name: data[0].name,
        surname: data[0].surname,
        middle_name: data[0].middle_name,
        email: data[0].email,
        tel: data[0].tel,
      });
    } else {
      return res.json(false);
    }
  })
};

module.exports = {
  getData,
  updateUser,
  checkUser,
}