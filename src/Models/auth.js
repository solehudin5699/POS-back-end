const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dbConnect = require("../Configs/dbConnect");
const { changeUser } = require("../Configs/dbConnect");

const authModel = {
  registration: (body) => {
    return new Promise((resolve, reject) => {
      //CHECK AVAILABILITY OF USERNAME
      const { username } = body;
      const checkUsername = "SELECT username FROM users WHERE username=?";
      dbConnect.query(checkUsername, [username], (err, data) => {
        if (err) {
          reject({ msg: "Something is wrong" });
        } else if (data.length) {
          reject({ msg: "Username already registered" });
        } else {
          //DO THIS IF USERNAME IS NOT ALREADY
          bycrypt.genSalt(10, (err, salt) => {
            if (err) {
              reject({ msg: "Something is wrong" });
            }
            const { password } = body;
            bycrypt.hash(password, salt, (err, hashedPassword) => {
              if (err) {
                reject({ msg: "Something is wrong" });
              }
              console.log(hashedPassword);
              const newBody = {
                ...body,
                password: hashedPassword,
              };
              const postQuery = "INSERT INTO users SET ?";
              dbConnect.query(postQuery, newBody, (err, data) => {
                if (!err) {
                  const msg = "Registration is succes";
                  resolve({ msg });
                } else {
                  reject({ msg: "Registration is failed" });
                }
              });
            });
          });
        }
      });
    });
  },
  login: (body) => {
    return new Promise((resolve, reject) => {
      const { username, level_id } = body;
      const loginQuery =
        "SELECT user_id, name, username, password, level_id FROM users WHERE username=? AND level_id=?";
      dbConnect.query(loginQuery, [username, level_id], (err, data) => {
        // dbConnect.query(loginQuery, body.username, (err, data) => {
        if (err) {
          reject({ msg: "Something is wrong" });
        } else if (!data.length) {
          reject({ msg: "Username is not registered." });
        } else {
          bycrypt.compare(body.password, data[0].password, (err, result) => {
            if (result) {
              const { username } = body;
              const { user_id, name, level_id } = data[0];
              const payload = {
                username,
                level_id,
              };
              //CHECK LEVEL USER (SUPERVISOR||CASHIER)
              let secretKey;
              if (level_id == 1) {
                secretKey = process.env.SECRET_KEY_SUPERVISOR;
              } else {
                secretKey = process.env.SECRET_KEY_CASHIER;
              }
              //CREATE TOKEN
              const token = jwt.sign(payload, secretKey, {
                expiresIn: "10h",
              });
              const msg = "Login Succes";
              resolve({ msg, user_id, name, level_id, token });
            }
            if (!result) {
              reject({ msg: "Wrong Password" });
            }
            if (err) {
              reject({ msg: "Something is wrong." });
            }
          });
        }
      });
    });
  },
};

module.exports = authModel;
