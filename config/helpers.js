var path = require('path')
var _root = path.resolve(__dirname, '..');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}
exports.root = root;


function getParameterValueFromOption(option, defaultValue) {  
  const argv = process.argv;
  var optionValue = null;
  if (argv.length > 2) {
    argv.forEach(function(value, idx) {
      if (value === option && (idx + 1) <= (argv.length-1))  {
        optionValue = argv[idx + 1]; 
      }
    });
  }
  return optionValue || defaultValue;
}
exports.getParameterValueFromOption = getParameterValueFromOption;