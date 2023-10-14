const {
  newsCategory,
  newsLanguage,
  newsCountry,
} = require("../localdatasource/data.json");
class Preference {
  static validate(body) {
    if (body.hasOwnProperty("category")) {
      if (!newsCategory.includes(body.category)) {
        return {
          status: false,
          message: "Please provide valid category",
        };
      }
    }
    if (body.hasOwnProperty("country")) {
      if (!newsCountry.includes(body.country)) {
        return {
          status: false,
          message: "Please provide valid country",
        };
      }
    }
    if (body.hasOwnProperty("language")) {
      if (!newsLanguage.includes(body.language)) {
        return {
          status: false,
          message: "Please provide valid language",
        };
      }
    }
    return {
      status: true,
      message: "found",
    };
  }
  static isObjectEmpty(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return true;
      }
    }
    return false;
  }
}
module.exports = Preference;
