const express = require("express");
const router = express.Router();
const {
  updateMyPreference,
  fetchMyPreference,
  fetchNews,
} = require("../controllers/newsController");
router.route("/").get(fetchNews);
router.route("/preferences").get(fetchMyPreference).patch(updateMyPreference);

module.exports = router;
