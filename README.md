# VSOP87 🪐

> A fast implementation of the VSOP87 theory in JavaScript.

# What?

A JavaScript library that implements series A and C of the VSOP87 theory.

It's big: ~719 Kb to ~826 Kb gzipped depending on the series (~2.08 Mb to ~2.29 Mb unzipped).

# Install

```sh
$ yarn vsop87
```

# Usage

in node:

```js
const vsop87a = require('vsop87/dist/vsop87a.umd.js');
// Or:
const vsop87c = require('vsop87/dist/vsop87c.umd.js');

// Return an object with the (x,y,z) coordinates of each planet.
const coords = vsop87c(2451545);
```

in browser:

```js
import vsop87a from 'vsop87/dist/vsop87a.esm.js';
// Or:
import vsop87c from 'vsop87/dist/vsop87c.esm.js';

// Return an object with the (x,y,z) coordinates of each planet.
const coords = vsop87c(2451545);
```

# About the precision

According to the doc:

> - Mercury, Venus, Earth-Moon barycenter and Mars: precision of 1" for 4000 years before and after J2000.
> - Jupiter and Saturn: precision of 1" for over 2000 years before and after J2000.
> - Uranus and Neptune: precision of 1" for over 6000 years before and after J2000.

# Why?

There are already tons of other implementations in JavaScript of the VSOP87 theory out there.

This one differs from the other ones by being statically compiled and optimised so it can run as fast as possible.
Other implementations usually use the original VSOP87 files, or arrays containing the terms, and then apply the operations successively. This is less efficient that inlining the operations directly.

By doing so, a few optimisations are possible:

- Remove terms multiplying by 0
- Remove entire terms of specific order resulting in 0
- Avoid calls to cosine when the value is 0
- Avoid calls to cosine when the value is Pi
- The result code ensures good level of minifiability.

Unlike other ports, this one is incomplete as it only support VSOP87 series A and C. But it is fully tested and compliant with the official check values.

I accept PR for extending support to other series.

# Contribute

## Build

```sh
$ yarn build
```

If a `RangeError: Maximum call stack size exceeded` error message occurs at build time, try to increase the maximum stack size of node:

```sh
$ node --stack-size=1968 node_modules/.bin/rollup --config
```

Same with when using Prettier:

```sh
$ node --stack-size=1968 node_modules/.bin/prettier --write "{src,test}/**/*.js"
```

## Run the unit test

Make sure to run the build script first, then:

```sh
$ yarn test
```
