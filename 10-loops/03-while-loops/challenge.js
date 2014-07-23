module.exports.stream = function(conditionalFn, actionFn) {
  while (conditionalFn()) {actionFn()}
};

module.exports.sumNumbers = function(x) {
  var one = 0;
  var two = 0;
  while (two < x.length) {
  	one = x[two] + one;
  	two++;
  }
  return one;
};