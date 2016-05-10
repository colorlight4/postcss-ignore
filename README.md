# PostCSS Ignore [![Build Status][ci-img]][ci]

[PostCSS] plugin to let specific css lines and rules untouched by other plugins.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/colorlight4/postcss-ignore.svg
[ci]:      https://travis-ci.org/colorlight4/postcss-ignore

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-ignore') ])
```

See [PostCSS] docs for examples for your environment.
