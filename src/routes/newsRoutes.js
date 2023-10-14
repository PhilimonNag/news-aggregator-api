const express = require("express");
const router = express.Router();
const {
  updateMyPreference,
  fetchMyPreference,
  fetchNews,
  fetchAvailablePreference,
} = require("../controllers/newsController");
router.route("/").get(fetchNews);
router.route("/preferences").get(fetchMyPreference).patch(updateMyPreference);
router.get("/preferences/all", fetchAvailablePreference);

module.exports = router;
