# PostCSS Ignore

[PostCSS] plugin to let specific css lines and rules untouched by other plugins.

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
