[![Build Status](https://travis-ci.org/misinoe/HSVColorSpace.js.svg?branch=master)](https://travis-ci.org/misinoe/HSVColorSpace.js)

# HSVColorSpace

## Install
```shell
npm install hsv-color-space
```


## Get Started
### Hex RGB to HSV
```js
var HSVColorSpace = require("./HSVColorSpace.js");

// from Hex
var hex = 0xff8866;

// Hex to R,G,B
var r = (hex>>16) & 0xff;
var g = (hex>>8) & 0xff;
var b = hex & 0xff;

// to Float
r /= 0xff;
g /= 0xff;
b /= 0xff;

var hsv = HSVColorSpace.rgbToHsv( r, g, b );

var h = hsv[0];
var s = hsv[1];
var v = hsv[2];

// Hue on 360
h *= 360;

console.log( `h:${h} s:${s} v:${v}` );

```

### HSV value to Hex RGB
```js
var HSVColorSpace = require("./HSVColorSpace.js");

var h = 180;
var s = 0.5;
var v = 0.25;

// Hue to Float
h /= 360;

var rgb = HSVColorSpace.hsvToRgb( h, s, v );

// Get R,G,B
var r = rgb[0];
var g = rgb[1];
var b = rgb[2];

// Merge Hex
var color = (r*0xff<<16) + (g*0xff<<8) + (b*0xff<<0);

console.log( `color:#${color.toString(16).toUpperCase()}` );

```

## test
`npm run test`
