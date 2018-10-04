module.exports = function getZerosCount(number, base) {
  var ans = Number.MAX_VALUE;
  
  var j = base;
  for (var i = 2; i <= base; i++) {
    if (j % i === 0) {
      var p = 0;
      while (j % i === 0) {
         j = j / i;     
         p++;
      }
      var c = 0;
      var z = Math.floor(number / i);
      while (z > 0) {
        c += z;
        z = Math.floor(z / i);
      }
      ans = Math.min(ans, Math.floor(c / p))
    }
  }
  return ans;
}