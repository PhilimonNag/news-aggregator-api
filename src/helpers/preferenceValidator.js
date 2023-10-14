let newsCategory = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];
let newsLanguage = [
  "ar",
  "de",
  "en",
  "es",
  "fr",
  "he",
  "it",
  "nl",
  "no",
  "pt",
  "ru",
  "sv",
  "ud",
  "zh",
];
let newsCountry = [
  "ae",
  "ar",
  "at",
  "au",
  "be",
  "bg",
  "br",
  "ca",
  "ch",
  "cn",
  "co",
  "cu",
  "cz",
  "de",
  "eg",
  "fr",
  "gb",
  "gr",
  "hk",
  "hu",
  "id",
  "ie",
  "il",
  "in",
  "it",
  "jp",
  "kr",
  "lt",
  "lv",
  "ma",
  "mx",
  "my",
  "ng",
  "nl",
  "no",
  "nz",
  "ph",
  "pl",
  "pt",
  "ro",
  "rs",
  "ru",
  "sa",
  "se",
  "sg",
  "si",
  "sk",
  "th",
  "tr",
  "tw",
  "ua",
  "us",
  "ve",
  "za",
];
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
