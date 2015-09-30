var PhoneNumber = function(phoneNumber) {
    area = phoneNumber.substring(0, 3),
    exchange = phoneNumber.substring(3, 6),
    suffix = phoneNumber.substring(6, 10),

    this.number = function() {
      var cleanNumber = clearChars()
      if ((checkLength(cleanNumber) && checkFirstDigit(cleanNumber)) || (cleanNumber.length < 10)) return '0000000000';
      if (checkLength(cleanNumber)) return cleanNumber.slice(1);
      return cleanNumber;
    },

    this.areaCode = function() {
      return area;
    },

    this.toString = function() {
      return '(' + area +') '+ exchange + '-' + suffix;
    },

    clearChars = function() {
      return phoneNumber.replace(/\D/g, '')
    },

    checkLength = function(number){
      return number.length !== 10;
    },

    checkFirstDigit = function(number){
      return number[0] != 1;
    };
};

module.exports = PhoneNumber;