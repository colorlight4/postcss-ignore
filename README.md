# PostCSS Ignore

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/colorlight4/postcss-ignore/master/LICENSE)

> [PostCSS] plugin to let specific css lines and rules untouched by other plugins.

**DISCLAIMER:** Only tested with Gulp workflows & `!ignore` flag breaks css if not removed (by this plugin) - usage on own risk so far.
If anyone have some ideas e.g. how it would be possible to flag the decl without breaking it - feel free to constribute or find me on [Twitter] :)


[Twitter]: https://twitter.com/colorlight4
[PostCSS]: https://github.com/postcss/postcss

```css
.foo {
    /* Input example */

    z-index: 1337 !ignore;
}
```

```css
.foo {
  /* Output example */

  z-index: 1337;
}
```

## Usage

First things first:
```sh
# 1. clone repo
# 2. link package global
$ cd package-folder
$ npm link
# 3. link package local
$ cd project-node_modules-folder/
$ npm link postcss-ignore

```


Gulp:
```js

gulp.task('scss', function() {
    gulp.src('src/css/*.css')
        .pipe( postcss([ 
            ignore() // <- hide flagged declarations
            
            // other plugins
            
            ])
        )
        
        // maybe some more things
        
        .pipe( postcss([ 
            ignore('last') // <- **unhide** flagged declarations
        ]) )
        .pipe( gulp.dest('dist/css/'))
        .pipe( reload({stream:true}));
});

```

**Note that** the `ignore('last')` call has to be in an other pipe than the initial.
