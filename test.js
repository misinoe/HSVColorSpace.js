var HSVColorSpace = require("./HSVColorSpace.js");


var test1 = ( r, g, b )=>{
  var hsv = HSVColorSpace.rgbToHsv( r, g, b );
  var rgb = HSVColorSpace.hsvToRgb( hsv[0], hsv[1], hsv[2] );

  if( r !== rgb[0] ) console.error( `R not matched, r:${r} rgb[0]:${rgb[0]}` );
  if( g !== rgb[1] ) console.error( `G not matched, g:${g} rgb[0]:${rgb[1]}` );
  if( b !== rgb[2] ) console.error( `B not matched, b:${b} rgb[0]:${rgb[2]}` );
};


test1( 1.0, 0.0, 0.0 );
test1( 0.0, 1.0, 0.0 );
test1( 0.0, 0.0, 1.0 );

test1( 0.5, 0.0, 1.0 );
test1( 0.5, 1.0, 0.5 );
test1( 1.0, 1.0, 0.5 );


var test2 = ( r, g, b )=>{
  var hsv = HSVColorSpace.rgbToHsv( r, g, b );
  var rgb = HSVColorSpace.hsvToRgb( hsv[0], hsv[1], hsv[2] );

  if( Math.abs(r - rgb[0]) > 0.00000001 ) console.error( `R diff over 0.00000001 r:${r} rgb[0]:${rgb[0]}` );
  if( Math.abs(g - rgb[1]) > 0.00000001 ) console.error( `G diff over 0.00000001 g:${g} rgb[1]:${rgb[1]}` );
  if( Math.abs(b - rgb[2]) > 0.00000001 ) console.error( `B diff over 0.00000001 b:${b} rgb[2]:${rgb[2]}` );
};

test2( 0.0123456789, 0.9876543210, 0.555555555555 );
test2( 0.0927407652, 0.0987652451, 0.098228965299 );
test2( 0.0927407652, 0.0987652451, 0.028179921992 );

test2( 0.0000000001, 0.0000000001, 0.000000000001 );
test2( 0.0000000005, 0.0000000005, 0.000000000005 );
test2( 0.0000000009, 0.0000000009, 0.000000000009 );

for(i=0; i<10000; i++) test2( Math.random(), Math.random(), Math.random() );


var test3 = ( h, s, v )=>{
  var rgb = HSVColorSpace.hsvToRgb( h, s, v );
  var hsv = HSVColorSpace.rgbToHsv( rgb[0], rgb[1], rgb[2] );

  if( h !== hsv[0] ) console.error( `H not matched, h:${h} hsv[0]:${hsv[0]}` );
  if( s !== hsv[1] ) console.error( `S not matched, s:${s} hsv[0]:${hsv[1]}` );
  if( v !== hsv[2] ) console.error( `V not matched, v:${v} hsv[0]:${hsv[2]}` );
};

test3( 0.5, 1.0, 1.0 );
test3( 0.9, 1.0, 0.5 );
test3( 0.3, 1.0, 0.2 );
test3( 0.3, 0.9, 0.2 );


var test4 = ( h, s, v )=>{
  var rgb = HSVColorSpace.hsvToRgb( h, s, v );
  var hsv = HSVColorSpace.rgbToHsv( rgb[0], rgb[1], rgb[2] );

  if( Math.abs(h - hsv[0]) > 0.00000001 ) console.error( `H diff over 0.00000001 h:${h} hsv[0]:${hsv[0]}` );
  if( Math.abs(s - hsv[1]) > 0.00000001 ) console.error( `S diff over 0.00000001 s:${s} hsv[1]:${hsv[1]}` );
  if( Math.abs(v - hsv[2]) > 0.00000001 ) console.error( `V diff over 0.00000001 v:${v} hsv[2]:${hsv[2]}` );
};

for(i=0; i<10000; i++) test4( Math.random()*0.99999999999, Math.random(), Math.random() );

var test5 = (h, s, v)=>{
  var rgb1 = HSVColorSpace.hsvToRgb( h, s, v );
  var hsv = HSVColorSpace.rgbToHsv( rgb1[0], rgb1[1], rgb1[2] );
  var rgb2 = HSVColorSpace.hsvToRgb( hsv[0], hsv[1], hsv[2] );

  if( Math.abs(rgb1[0] - rgb2[0]) > 0.00000001 ) console.error( `R diff over 0.00000001 rgb1[0]:${rgb1[0]} rgb2[0]:${rgb2[0]}` );
  if( Math.abs(rgb1[1] - rgb2[1]) > 0.00000001 ) console.error( `G diff over 0.00000001 rgb1[1]:${rgb1[1]} rgb2[1]:${rgb2[1]}` );
  if( Math.abs(rgb1[2] - rgb2[2]) > 0.00000001 ) console.error( `B diff over 0.00000001 rgb1[2]:${rgb1[2]} rgb2[2]:${rgb2[2]}` );
}

test5(0.0, 0.0, 0.0);
test5(1.0, 1.0, 1.0);
test5(1.0, 0.0, 0.0);
test5(0.0, 0.0, 1.0);
test5(0.5, 0.6, 0.2);
test5(0.0, 0.5, 0.2);
test5(0.0, 0.6, 0.5);
test5(0.9, 0.0, 0.2);
test5(0.9, 0.0, 0.3);
test5(0.9, 0.0, 0.4);
test5(0.2, 0.9, 0.0);
test5(0.3, 0.5, 0.0);
test5(0.4, 0.2, 0.0);
for(i=0; i<5000; i++){
  test5(Math.random(), Math.random(), Math.random());
  test5(1.0, Math.random(), Math.random());
  test5(Math.random(), 1.0, Math.random());
  test5(Math.random(), Math.random(), 1.0);
  test5(0.0, Math.random(), Math.random());
  test5(Math.random(), 0.0, Math.random());
  test5(Math.random(), Math.random(), 0.0);
}

var test6 = (h, s, v)=>{
  var rgb = HSVColorSpace.hsvToRgb( h, s, v );
  if(rgb[0] > 0) console.error(`R Over 0:${rgb[0]}`);
  if(rgb[1] > 0) console.error(`G Over 0:${rgb[1]}`);
  if(rgb[2] > 0) console.error(`B Over 0:${rgb[2]}`);
}
for(i=0; i<1000; i++){
  test6(Math.random(), Math.random(), 0.0);
  test6(0.0, Math.random(), 0.0);
  test6(Math.random(), 0.0, 0.0);
}

for(i=0;i<100;i++){
  var rgb = HSVColorSpace.hsvToRgb( 0.0, 0.0, Math.max(0.0001, Math.random()));
  if(rgb[0] <= 0 || rgb[1] <= 0 || rgb[2] <= 0) console.error("rgb MUST NOT 0");
}

console.log( "Test Complete" );
