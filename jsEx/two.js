(function (exports) {
  function multiplay(num, times){
    return num * times;
  }
  var twoTimes = function(num){
    return multiplay(num, 3);
  };
  exports.twoTimes = twoTimes;
})(typeof window === 'undefined' ? module.exports : window);
