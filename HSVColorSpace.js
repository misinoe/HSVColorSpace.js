/**
* ColorSpace utils
*/
export default class HSVColorSpace{

  /**
  * HSV convert to RGB
  * @param {number} [h=0.0] - Hue of HSV, 0.0~1.0
  * @param {number} [s=0.0] - Saturation(Chroma) of HSV, 0.0~1.0
  * @param {number} [v=0.0] - Value(Brightness) of HSV 0.0~1.0
  * @returns {array} [r,g,b] r:0.0~1.0, g:0.0~1.0, b:0.0~1.0
  */
  static hsvToRgb( h=0, s=0, v=0 ){
    var r=v,g=v,b=v;
    if (s > 0.0) {
      h *= 6.0;
      var i = h << 0;
      var f = h - i;
      switch (i) {
        default:
        case 0:
          g *= 1 - s * (1 - f);
          b *= 1 - s;
          break;
        case 1:
          r *= 1 - s * f;
          b *= 1 - s;
          break;
        case 2:
          r *= 1 - s;
          b *= 1 - s * (1 - f);
          break;
        case 3:
          r *= 1 - s;
          g *= 1 - s * f;
          break;
        case 4:
          r *= 1 - s * (1 - f);
          g *= 1 - s;
          break;
        case 5:
          g *= 1 - s;
          b *= 1 - s * f;
          break;
      }

      return [r,g,b];
    }

    return [0,0,0];
  }

  /**
  * RGB Convert to HSV
  * @param {number} [r=0.0] - Red 0.0~1.0
  * @param {number} [g=0.0] - Green 0.0~1.0
  * @param {number} [b=0.0] - Blue 0.0~1.0
  * @return {array} [h,s,v] h:0.0~1.0, s:0.0~1.0, v:0.0~1.0
  */
  static rgbToHsv( r=0, g=0, b=0 ){
    var max = r > g ? r : g;
    max = max > b ? max : b;
    var min = r < g ? r : g;
    min = min < b ? min : b;
    var h = max - min;
    if (h > 0.0) {
      if (max == r) {
        h = (g - b) / h;
        if (h < 0.0) {
          h += 6.0;
        }
      } else if (max === g) {
        h = 2.0 + (b - r) / h;
      } else {
        h = 4.0 + (r - g) / h;
      }
    }
    h /= 6.0;
    var s = (max - min);
    if (max != 0.0) s /= max;
    var v = max;

    return [h,s,v];
  }
}
