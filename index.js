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

            var foo  = /^(?:\w*\-)*\w+/
            var value = /[^:]*$/
            var baa = / !ignore/

            var prop = rule.text.match(foo);
            var value = rule.text.replace(baa, ';').match(value)


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