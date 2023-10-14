const Preference = require("../helpers/preferenceValidator");
const data = require("../localdatasource/data.json");
const axios = require("axios");
let myPreference = {};
const fetchMyPreference = (req, res) => {
  const userId = req.user_id;
  if (myPreference.hasOwnProperty(userId)) {
    let data = myPreference[userId];
    res.status(200).send({ success: false, result: data });
  } else {
    res.status(404).send({ success: false, message: "Preference Not found" });
  }
};
const updateMyPreference = (req, res) => {
  const userId = req.user_id;
  const { category, language, country } = req.body;
  let preferences = {};

  if (category || language || country) {
    let { status, message } = Preference.validate(req.body);
    if (status) {
      if (category) preferences["category"] = category;
      if (language) preferences["language"] = language;
      if (country) preferences["country"] = country;
      myPreference[userId] = preferences;
      res.status(200).send({ success: true, message: "Preference modified" });
    } else {
      res.status(400).send({ success: false, message });
    }
  } else {
    res.status(400).send({
      success: false,
      message: "Please provide atleast category or language or country",
    });
  }
};
const fetchNews = async (req, res) => {
  try {
    let userId = req.user_id;
    let baseUrl = "https://newsapi.org/v2/top-headlines";
    if (Preference.isObjectEmpty(myPreference[userId])) {
      let qString = new URLSearchParams(myPreference[userId]).toString();
      //   querystring.stringify(myPreference);
      // console.log("query", qString);
      let fullUrl = `${baseUrl}?${qString}&apiKey=${process.env.API_KEY}`;
      // console.log(fullUrl);
      await axios.get(fullUrl).then((data) => {
        // console.log(data);
        res.status(200).send({
          success: true,
          message: `${data.data.totalResults} News Found`,
          result: data.data.articles,
        });
      });
    } else {
      res.status(400).send({
        success: false,
        message: "please select preferences",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
const fetchAvailablePreference = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Available Preference Founds",
    result: data,
  });
};
module.exports = {
  fetchMyPreference,
  updateMyPreference,
  fetchNews,
  fetchAvailablePreference,
};
