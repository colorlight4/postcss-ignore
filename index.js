var postcss = require('postcss');

module.exports = postcss.plugin('postcss-ignore', function (opts) {
  opts = opts || {};

  return function (css) {
    var last = false

    if (opts == 'last') {
      last = true
    }

    if (last == true) {

      css.walkComments(function (rule) { 
        if ( rule.text.indexOf('!ignore') != -1 ) { 

          var prop  = /^(?:\w*\-)*\w+/
          var value = /[^:]*$/
          var flag = / !ignore/

          var prop = rule.text.match(prop)
          var value = rule.text.replace(flag, ';').match(value)

          rule.replaceWith({ prop: prop, value: value });

        } 
      }); 
  
    } else {  
  
      css.walkDecls(function (rule) {   
        if ( rule.value.indexOf('!ignore') != -1 ) { 
          rule.replaceWith({text: rule});
        }
      });

    }
  };
});