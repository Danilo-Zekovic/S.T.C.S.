(function (exports) {
  var byTwo = require('./two.js').twoTimes;
  var addNum = {
    add: function(x,y) {
      return byTwo(x + y);
    }
  };
  exports.addNum = addNum;
})(typeof window === 'undefined' ? module.exports : window);
