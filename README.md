# @unction/splat

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> A => Array<B> => C

Takes a curried function (of *n* depth) and a list of arguments for that function (of *n* size) and applies those arguments to that function.

``` javascript
splat((a) => (b) => a + b)([1, 2]) // 3
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/splat.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/splat.svg?maxAge=2592000&style=flat-square
