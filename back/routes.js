const express = require('express');
const {
  getData,
  updateUser,
  checkUser,
} = require("./controllers");

const router = express.Router();

router.get("/api/data", getData);
router.put("/api/change", updateUser);
router.post("/api/users", checkUser);

module.exports = router;

