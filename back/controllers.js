const mysql = require("mysql");
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "anton12031998",
  database: "foragency",
})

const getData = (_, res) => {
  db.query("SELECT * FROM list", (err, data) => res.json(err ?? data))
};

const updateUser = (req, res) => {
  const sql = `
    UPDATE users
    SET password="${req.body.password}"
    WHERE login="${req.body.login}"
  `;
  db.query(sql, err => res.json(err ?? true))
};

const checkUser = (req, res) => {
  const sql = `SELECT * FROM users WHERE login="${req.body.login}"`;
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    if (data[0]?.password && data[0].password === req.body.password) {
      const { login, id, name, surname, middle_name, email, tel } = data[0];
      return res.json({ login, id, name, surname, middle_name, email, tel });
    } else return res.json(false);
  })
};

module.exports = {
  getData,
  updateUser,
  checkUser,
}