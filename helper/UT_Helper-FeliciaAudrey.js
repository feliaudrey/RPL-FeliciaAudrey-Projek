class Helper {
  static concatenateStrings(str1, str2) {
    return str1 + str2;
  }

  static splitStringByComa(str, delimiter) {
    return str.split(delimiter);
  }
}

module.exports = Helper;
