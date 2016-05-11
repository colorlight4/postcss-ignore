var postcss = require('postcss');

module.exports = postcss.plugin('postcss-ignore', function (opts) {
    opts = opts || {};

    // Work with options here

return function (css) {

    // Callback for each rule node.
    css.walkRules(function (rule) { 

      // Match the individual rule selector 
      if ( rule.value.indexOf('!ignore') !== -1 ) { 



// adskopaskdpoaksop

         // Array to contain the rule’s individual selector.
        var focuses = []; 
        rule.selectors.forEach(function (selector) { 

           // Passes all declaration values within the match of hover replacing those values with the returned result of focus.
          if ( selector.indexOf(':hover') !== -1 ) {

            focuses.push(selector.replace(/:hover/g, ':focus')); 
          }

        });

        // Checks if array contain values
        if ( focuses.length ) { 
          // Concat the original rules with the new duplicated :focus rules 
          // Groups of selectors are automatically split with commas.
          rule.selectors = rule.selectors.concat(focuses);
        }
      }
    });

    };
});
