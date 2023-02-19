mapboxgl.accessToken =
  "pk.eyJ1IjoiZG9yb3RoeWNoYXUiLCJhIjoiY2w0Y2IxMTVnMGJqcDNjbzJmMHh0cDJ5NSJ9.B3U7SQ1E1-DqehJ30Odsag";
const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: [121.55, 25.05], // starting position [lng, lat]
  zoom: 11, // starting zoom
});


function addmrt(res) {
  for (let i = 0; i < res.length; i++) {
    const el = document.createElement('div');
      const width = 50;
      const height = 50;
      el.className = 'marker';
      const marker1 = new mapboxgl.Marker(el)
      .setLngLat([res[i][3], res[i][4]])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(`<h3>捷運站</h3><p>` + res[i][1] + `</p>`)
      )
      .addTo(map);
  }
}

const mrt = [
  [
    1,
    "\u9802\u57d4\u7ad9\u51fa\u53e31",
    "1",
    121.4185726,
    24.9592829,
    "\u662f",
  ],
  [
    5,
    "\u677e\u5c71\u6a5f\u5834\u7ad9\u51fa\u53e31",
    "1",
    121.5520427,
    25.0636308,
    "\u662f",
  ],
  [
    8,
    "\u4e2d\u5c71\u570b\u4e2d\u7ad9\u51fa\u53e3",
    "0",
    121.544031,
    25.060889,
    "\u662f",
  ],
  [
    9,
    "\u5fe0\u5b5d\u5fa9\u8208\u7ad9\u51fa\u53e31",
    "1",
    121.543143,
    25.041797,
    "\u5426",
  ],
  [14, "\u5927\u5b89\u7ad9\u51fa\u53e31", "1", 121.541949, 25.033508, "\u5426"],
  [
    20,
    "\u79d1\u6280\u5927\u6a13\u7ad9\u51fa\u53e3",
    "0",
    121.543636,
    25.026154,
    "\u662f",
  ],
  [
    21,
    "\u516d\u5f35\u7281\u7ad9\u51fa\u53e3",
    "0",
    121.552737,
    25.023852,
    "\u662f",
  ],
  [22, "\u9e9f\u5149\u7ad9\u51fa\u53e3", "0", 121.558606, 25.018554, "\u662f"],
  [23, "\u8f9b\u4ea5\u7ad9\u51fa\u53e3", "0", 121.557021, 25.005119, "\u662f"],
  [
    24,
    "\u842c\u82b3\u91ab\u9662\u7ad9\u51fa\u53e3",
    "0",
    121.557737,
    24.999383,
    "\u662f",
  ],
  [
    25,
    "\u842c\u82b3\u793e\u5340\u7ad9\u51fa\u53e3",
    "0",
    121.5684518,
    24.9986402,
    "\u662f",
  ],
  [26, "\u6728\u67f5\u7ad9\u51fa\u53e3", "0", 121.573417, 24.998174, "\u662f"],
  [
    27,
    "\u52d5\u7269\u5712\u7ad9\u51fa\u53e31",
    "1",
    121.579942,
    24.9982988,
    "\u662f",
  ],
  [29, "\u5927\u76f4\u7ad9\u51fa\u53e31", "1", 121.547104, 25.080118, "\u662f"],
  [
    32,
    "\u528d\u5357\u8def\u7ad9\u51fa\u53e31",
    "1",
    121.555226,
    25.085174,
    "\u662f",
  ],
  [35, "\u897f\u6e56\u7ad9\u51fa\u53e31", "1", 121.566647, 25.082339, "\u662f"],
  [37, "\u6e2f\u5898\u7ad9\u51fa\u53e31", "1", 121.57556, 25.080152, "\u662f"],
  [39, "\u6587\u5fb7\u7ad9\u51fa\u53e31", "1", 121.58564, 25.078671, "\u662f"],
  [41, "\u5167\u6e56\u7ad9\u51fa\u53e31", "1", 121.594266, 25.083745, "\u662f"],
  [
    43,
    "\u5927\u6e56\u516c\u5712\u7ad9\u51fa\u53e31",
    "1",
    121.602377,
    25.083894,
    "\u662f",
  ],
  [
    45,
    "\u846b\u6d32\u7ad9\u51fa\u53e31",
    "1",
    121.6080683,
    25.0725096,
    "\u662f",
  ],
  [
    47,
    "\u6771\u6e56\u7ad9\u51fa\u53e31",
    "1",
    121.6108991,
    25.067189,
    "\u662f",
  ],
  [
    50,
    "\u5357\u6e2f\u8edf\u9ad4\u5712\u5340\u7ad9\u51fa\u53e31",
    "1",
    121.615817,
    25.059995,
    "\u662f",
  ],
  [
    52,
    "\u5357\u6e2f\u5c55\u89bd\u9928\u7ad9\u51fa\u53e31",
    "1",
    121.616936,
    25.055847,
    "\u662f",
  ],
  [
    60,
    "\u5c0f\u78a7\u6f6d\u7ad9\u51fa\u53e31",
    "1",
    121.530311,
    24.971684,
    "\u662f",
  ],
  [
    62,
    "\u65b0\u5e97\u7ad9\u51fa\u53e3",
    "0",
    121.5378464,
    24.9580886,
    "\u662f",
  ],
  [
    63,
    "\u65b0\u5e97\u5340\u516c\u6240\u7ad9\u51fa\u53e31",
    "1",
    121.541124,
    24.967393,
    "\u662f",
  ],
  [65, "\u4e03\u5f35\u7ad9\u51fa\u53e31", "1", 121.543068, 24.975025, "\u662f"],
  [
    67,
    "\u5927\u576a\u6797\u7ad9\u51fa\u53e31",
    "1",
    121.540874,
    24.982754,
    "\u5426",
  ],
  [72, "\u666f\u7f8e\u7ad9\u51fa\u53e31", "1", 121.540976, 24.993165, "\u662f"],
  [75, "\u842c\u9686\u7ad9\u51fa\u53e31", "1", 121.538896, 25.001367, "\u5426"],
  [79, "\u516c\u9928\u7ad9\u51fa\u53e31", "1", 121.534377, 25.014509, "\u662f"],
  [
    83,
    "\u53f0\u96fb\u5927\u6a13\u7ad9\u51fa\u53e31",
    "1",
    121.528577,
    25.01962,
    "\u5426",
  ],
  [88, "\u53e4\u4ead\u7ad9\u51fa\u53e31", "1", 121.522973, 25.025976, "\u662f"],
  [
    97,
    "\u4e2d\u6b63\u7d00\u5ff5\u5802\u7ad9\u51fa\u53e31",
    "1",
    121.517764,
    25.033034,
    "\u662f",
  ],
  [
    104,
    "\u5c0f\u5357\u9580\u7ad9\u51fa\u53e31",
    "1",
    121.509752,
    25.036434,
    "\u5426",
  ],
  [
    108,
    "\u9802\u6eaa\u7ad9\u51fa\u53e31",
    "1",
    121.515414,
    25.012895,
    "\u662f",
  ],
  [
    110,
    "\u6c38\u5b89\u5e02\u5834\u7ad9\u51fa\u53e3",
    "0",
    121.510962,
    25.002375,
    "\u662f",
  ],
  [111, "\u666f\u5b89\u7ad9\u51fa\u53e3", "0", 121.504632, 24.993731, "\u662f"],
  [
    112,
    "\u5357\u52e2\u89d2\u7ad9\u51fa\u53e31",
    "1",
    121.508639,
    24.990016,
    "\u5426",
  ],
  [
    116,
    "\u53f0\u5927\u91ab\u9662\u7ad9\u51fa\u53e31",
    "1",
    121.515731,
    25.040913,
    "\u662f",
  ],
  [124, "\u53f0\u5317\u8eca\u7ad9M1", "M1", 121.518193, 25.048232, "\u5426"],
  [
    128,
    "\u96d9\u9023\u7ad9\u51fa\u53e31",
    "1",
    121.520588,
    25.057499,
    "\u5426",
  ],
  [
    130,
    "\u6c11\u6b0a\u897f\u8def\u7ad9\u51fa\u53e31",
    "1",
    121.519454,
    25.062641,
    "\u662f",
  ],
  [
    140,
    "\u5713\u5c71\u7ad9\u51fa\u53e31",
    "1",
    121.520033,
    25.070785,
    "\u662f",
  ],
  [142, "\u528d\u6f6d\u7ad9\u51fa\u53e31", "1", 121.525175, 25.08503, "\u662f"],
  [
    145,
    "\u58eb\u6797\u7ad9\u51fa\u53e31",
    "1",
    121.525966,
    25.094106,
    "\u662f",
  ],
  [
    147,
    "\u829d\u5c71\u7ad9\u51fa\u53e31",
    "1",
    121.522636,
    25.102046,
    "\u662f",
  ],
  [
    149,
    "\u660e\u5fb7\u7ad9\u51fa\u53e31",
    "1",
    121.519153,
    25.109298,
    "\u662f",
  ],
  [
    152,
    "\u77f3\u724c\u7ad9\u51fa\u53e31",
    "1",
    121.5152545,
    25.1149633,
    "\u662f",
  ],
  [
    154,
    "\u552d\u54e9\u5cb8\u7ad9\u51fa\u53e31",
    "1",
    121.5061917,
    25.1208432,
    "\u662f",
  ],
  [156, "\u5947\u5ca9\u7ad9\u51fa\u53e3", "0", 121.50096, 25.126169, "\u662f"],
  [
    157,
    "\u5317\u6295\u7ad9\u51fa\u53e31",
    "1",
    121.498457,
    25.132464,
    "\u662f",
  ],
  [
    159,
    "\u65b0\u5317\u6295\u7ad9\u51fa\u53e31",
    "1",
    121.503524,
    25.136968,
    "\u662f",
  ],
  [
    162,
    "\u5fa9\u8208\u5d17\u7ad9\u51fa\u53e31",
    "1",
    121.485373,
    25.137665,
    "\u662f",
  ],
  [
    163,
    "\u5fe0\u7fa9\u7ad9\u51fa\u53e31",
    "1",
    121.473169,
    25.131056,
    "\u662f",
  ],
  [
    165,
    "\u95dc\u6e21\u7ad9\u51fa\u53e31",
    "1",
    121.467215,
    25.125431,
    "\u662f",
  ],
  [167, "\u7af9\u570d\u7ad9\u51fa\u53e31", "1", 121.45959, 25.1371, "\u662f"],
  [
    169,
    "\u7d05\u6a39\u6797\u7ad9\u51fa\u53e31",
    "1",
    121.459039,
    25.154137,
    "\u662f",
  ],
  [
    171,
    "\u6de1\u6c34\u7ad9\u51fa\u53e31",
    "1",
    121.445502,
    25.168266,
    "\u662f",
  ],
  [
    174,
    "\u6c38\u5be7\u7ad9\u51fa\u53e31",
    "1",
    121.435254,
    24.966714,
    "\u662f",
  ],
  [
    178,
    "\u571f\u57ce\u7ad9\u51fa\u53e31",
    "1",
    121.444173,
    24.973251,
    "\u662f",
  ],
  [
    181,
    "\u6d77\u5c71\u7ad9\u51fa\u53e31",
    "1",
    121.4486097,
    24.9853885,
    "\u5426",
  ],
  [
    184,
    "\u4e9e\u6771\u91ab\u9662\u7ad9\u51fa\u53e31",
    "1",
    121.452581,
    24.998933,
    "\u5426",
  ],
  [
    187,
    "\u5e9c\u4e2d\u7ad9\u51fa\u53e31",
    "1",
    121.459077,
    25.008486,
    "\u662f",
  ],
  [
    190,
    "\u677f\u6a4b\u7ad9\u51fa\u53e31",
    "1",
    121.461838,
    25.0133143,
    "\u5426",
  ],
  [
    193,
    "\u65b0\u57d4\u7ad9\u51fa\u53e31",
    "1",
    121.467457,
    25.023063,
    "\u5426",
  ],
  [
    198,
    "\u6c5f\u5b50\u7fe0\u7ad9\u51fa\u53e31",
    "1",
    121.471914,
    25.030298,
    "\u5426",
  ],
  [
    204,
    "\u9f8d\u5c71\u5bfa\u7ad9\u51fa\u53e31",
    "1",
    121.49953,
    25.035484,
    "\u662f",
  ],
  [
    207,
    "\u5584\u5c0e\u5bfa\u7ad9\u51fa\u53e31",
    "1",
    121.523009,
    25.045097,
    "\u5426",
  ],
  [
    216,
    "\u5fe0\u5b5d\u65b0\u751f\u7ad9\u51fa\u53e31",
    "1",
    121.531829,
    25.042784,
    "\u5426",
  ],
  [
    220,
    "\u5fe0\u5b5d\u6566\u5316\u7ad9\u51fa\u53e31",
    "1",
    121.550578,
    25.041642,
    "\u5426",
  ],
  [
    228,
    "\u570b\u7236\u7d00\u5ff5\u9928\u7ad9\u51fa\u53e31",
    "1",
    121.556663,
    25.041838,
    "\u5426",
  ],
  [
    233,
    "\u5e02\u653f\u5e9c\u7ad9\u51fa\u53e31",
    "1",
    121.565459,
    25.041408,
    "\u5426",
  ],
  [237, "\u6c38\u6625\u7ad9\u51fa\u53e31", "1", 121.57512, 25.040995, "\u5426"],
  [
    242,
    "\u5f8c\u5c71\u57e4\u7ad9\u51fa\u53e31",
    "1",
    121.58141,
    25.044422,
    "\u5426",
  ],
  [
    246,
    "\u6606\u967d\u7ad9\u51fa\u53e31",
    "1",
    121.592726,
    25.050319,
    "\u5426",
  ],
  [
    250,
    "\u5357\u6e2f\u7ad9\u51fa\u53e31",
    "1",
    121.606357,
    25.051911,
    "\u5426",
  ],
  [
    252,
    "\u8c61\u5c71\u7ad9\u51fa\u53e31",
    "1",
    121.569394,
    25.033025,
    "\u662f",
  ],
  [
    255,
    "\u53f0\u5317101/\u4e16\u8cbf\u7ad9\u51fa\u53e31",
    "1",
    121.561671,
    25.033107,
    "\u5426",
  ],
  [
    260,
    "\u4fe1\u7fa9\u5b89\u548c\u7ad9\u51fa\u53e31",
    "1",
    121.552602,
    25.033377,
    "\u5426",
  ],
  [
    266,
    "\u5927\u5b89\u68ee\u6797\u516c\u5712\u7ad9\u51fa\u53e31",
    "1",
    121.534442,
    25.033693,
    "\u5426",
  ],
  [
    272,
    "\u8f14\u5927\u7ad9\u51fa\u53e31",
    "1",
    121.435264,
    25.032932,
    "\u662f",
  ],
  [276, "\u65b0\u838a\u7ad9\u51fa\u53e31", "1", 121.452168, 25.03615, "\u662f"],
  [
    278,
    "\u982d\u524d\u5e84\u7ad9\u51fa\u53e31",
    "1",
    121.460303,
    25.039844,
    "\u662f",
  ],
  [
    282,
    "\u5148\u55c7\u5bae\u7ad9\u51fa\u53e31",
    "1",
    121.471319,
    25.046497,
    "\u662f",
  ],
  [
    285,
    "\u4e09\u91cd\u7ad9\u51fa\u53e31",
    "1",
    121.4647333,
    25.0913266,
    "\u662f",
  ],
  [288, "\u83dc\u5bee\u7ad9\u51fa\u53e31", "1", 121.490673, 25.05971, "\u5426"],
  [
    291,
    "\u53f0\u5317\u6a4b\u7ad9\u51fa\u53e3",
    "0",
    121.500281,
    25.062966,
    "\u662f",
  ],
  [
    292,
    "\u5927\u6a4b\u982d\u7ad9\u51fa\u53e31",
    "1",
    121.512319,
    25.06318,
    "\u662f",
  ],
  [
    296,
    "\u4e2d\u5c71\u570b\u5c0f\u7ad9\u51fa\u53e31",
    "1",
    121.526095,
    25.06284,
    "\u5426",
  ],
  [
    300,
    "\u884c\u5929\u5bae\u7ad9\u51fa\u53e31",
    "1",
    121.533004,
    25.058316,
    "\u5426",
  ],
  [
    304,
    "\u6771\u9580\u7ad9\u51fa\u53e31",
    "1",
    121.527994,
    25.034157,
    "\u5426",
  ],
  [
    312,
    "\u8606\u6d32\u7ad9\u51fa\u53e31",
    "1",
    121.4647333,
    25.0913266,
    "\u5426",
  ],
  [
    315,
    "\u4e09\u6c11\u9ad8\u4e2d\u7ad9\u51fa\u53e31",
    "1",
    121.472542,
    25.085494,
    "\u662f",
  ],
  [
    317,
    "\u5f90\u532f\u4e2d\u5b78\u7ad9\u51fa\u53e31",
    "1",
    121.47988,
    25.080303,
    "\u5426",
  ],
  [
    319,
    "\u4e09\u548c\u570b\u4e2d\u7ad9\u51fa\u53e31",
    "1",
    121.486398,
    25.076586,
    "\u662f",
  ],
  [
    321,
    "\u4e09\u91cd\u570b\u5c0f\u7ad9\u51fa\u53e3",
    "0",
    121.496656,
    25.070536,
    "\u662f",
  ],
  [
    322,
    "\u8ff4\u9f8d\u7ad9\u51fa\u53e31",
    "1",
    121.4113464,
    25.0217259,
    "\u662f",
  ],
  [
    325,
    "\u4e39\u9cf3\u7ad9\u51fa\u53e31",
    "1",
    121.4221819,
    25.0289618,
    "\u5426",
  ],
  [
    327,
    "\u5357\u4eac\u5fa9\u8208\u7ad9\u51fa\u53e31",
    "1",
    121.542121,
    25.052625,
    "\u662f",
  ],
  [
    335,
    "\u4e2d\u5c71\u7ad9\u51fa\u53e31",
    "1",
    121.520303,
    25.052414,
    "\u5426",
  ],
  [
    341,
    "\u897f\u9580\u7ad9\u51fa\u53e31",
    "1",
    121.507566,
    25.042137,
    "\u5426",
  ],
  [
    347,
    "\u677e\u6c5f\u5357\u4eac\u7ad9\u51fa\u53e31",
    "1",
    121.532388,
    25.051842,
    "\u662f",
  ],
  [
    355,
    "\u5317\u9580\u7ad9\u51fa\u53e31",
    "1",
    121.510212,
    25.048747,
    "\u5426",
  ],
  [
    358,
    "\u53f0\u5317\u5c0f\u5de8\u86cb\u7ad9\u51fa\u53e31",
    "1",
    121.55153,
    25.051836,
    "\u662f",
  ],
  [
    363,
    "\u5357\u4eac\u4e09\u6c11\u7ad9\u51fa\u53e31",
    "1",
    121.563643,
    25.051517,
    "\u662f",
  ],
  [
    367,
    "\u677e\u5c71\u7ad9\u51fa\u53e31",
    "1",
    121.577022,
    25.050171,
    "\u5426",
  ],
  [
    372,
    "\u5341\u56db\u5f35\u7ad9\u51fa\u53e3",
    "0",
    121.527701,
    24.984467,
    "\u662f",
  ],
  [
    373,
    "\u79c0\u6717\u6a4b\u7ad9\u51fa\u53e31",
    "1",
    121.52574,
    24.990418,
    "\u5426",
  ],
  [
    375,
    "\u666f\u5e73\u7ad9\u51fa\u53e3",
    "0",
    121.5165532,
    24.9919681,
    "\u662f",
  ],
  [
    376,
    "\u4e2d\u548c\u7ad9\u51fa\u53e3",
    "0",
    121.4964906,
    25.00221178,
    "\u662f",
  ],
  [
    377,
    "\u6a4b\u548c\u7ad9\u51fa\u53e3",
    "0",
    121.4904608,
    25.0044131,
    "\u662f",
  ],
  [
    378,
    "\u4e2d\u539f\u7ad9\u51fa\u53e3",
    "0",
    121.4841593,
    25.0084104,
    "\u662f",
  ],
  [
    379,
    "\u677f\u65b0\u7ad9\u51fa\u53e3",
    "0",
    121.4722124,
    25.0144914,
    "\u662f",
  ],
  [
    382,
    "\u65b0\u57d4\u6c11\u751f\u7ad9\u51fa\u53e3",
    "0",
    121.466839,
    25.026125,
    "\u662f",
  ],
  [
    383,
    "\u5e78\u798f\u7ad9\u51fa\u53e31",
    "1",
    121.460146,
    25.050126,
    "\u662f",
  ],
  [
    385,
    "\u65b0\u5317\u7522\u696d\u5712\u5340\u7ad9\u51fa\u53e3",
    "0",
    121.4599257,
    25.0615483,
    "\u662f",
  ],
];

addmrt(mrt);

function addhouse(res) {
  for (let i = 0; i < res.length; i++) {
    const el = document.createElement('div');
    const width = 50;
    const height = 50;
    el.className = res[i][4];
    const marker1 = new mapboxgl.Marker(el)
      .setLngLat([res[i][1], res[i][2]])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(`<h3>社會住宅</h3><p>` + res[i][0] + `</p>`)
      )
      .addTo(map);
  }
}

const house = [
  [
    "\u5167\u6e56\u5340\u91d1\u9f8d\u90fd\u66f4\u5206\u56de\u6236",
    "121.5927",
    "25.0855",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u5927\u540c\u5340\u6377\u904b\u65b0\u838a\u7dda\u5927\u6a4b\u982d\u7ad9\u5206\u56de",
    "121.5117",
    "25.06321",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u65b0\u5317\u5e02\u65b0\u5e97\u5340\u65b0\u5e97\u6a5f\u5ee0\u806f\u958b\u5b85",
    "121.5299",
    "24.973",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u58eb\u6797\u5340\u6c38\u5e73\u793e\u6703\u4f4f\u5b85",
    "121.5038",
    "25.08886",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u5927\u540c\u5340\u5927\u9f8d\u5cd2\u793e\u6703\u4f4f\u5b85",
    "121.5181",
    "25.07136",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u5ee3\u6148\u535a\u611b\u5712\u5340\u793e\u6703\u4f4f\u5b85(D\u57fa\u5730)",
    "121.5814",
    "25.03891",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u5357\u6e2f\u5340\u6771\u660e\u793e\u6703\u4f4f\u5b85",
    "121.6039",
    "25.05435",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u65af\u6587\u91cc\u4e09\u671f\u90fd\u66f4\u5206\u56de\u6236",
    "121.517",
    "25.06715",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u5357\u6e2f\u5340\u5c0f\u5f4e\u793e\u6703\u4f4f\u5b85",
    "121.5936",
    "25.05763",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u884c\u5584\u793e\u6703\u4f4f\u5b85 ",
    "121.5815",
    "25.06071",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u6587\u5c71\u5340\u5b89\u5eb7\u5e73\u5b85BC\u8857\u5ed3\u7d50\u69cb\u88dc\u5f37 \u66a8\u5ba4\u5167\u88dd\u4fee",
    "121.558",
    "24.98835",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u65b0\u5317\u5e02\u4e09\u91cd\u5340\u81fa\u5317\u6a4b\u806f\u958b\u5b85",
    "121.5007",
    "25.06303",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u5927\u540c\u5340\u6566\u714c\u793e\u6703\u4f4f\u5b85",
    "121.517",
    "25.07574",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u4e2d\u5c71\u5340\u65b0\u8208\u793e\u6703\u4f4f\u5b85 ",
    "121.5264",
    "25.06139",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u842c\u83ef\u5340\u9752\u5e74\u793e\u6703\u4f4f\u5b85",
    "121.504",
    "25.01995",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u677e\u5c71\u5340\u5065\u5eb7\u793e\u6703\u4f4f\u5b85",
    "121.564",
    "25.05436",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u5ee3\u6148\u535a\u611b\u5712\u5340(A\u57fa\u5730)-\u884c\u653f\u5927\u6a13",
    "121.582",
    "25.03789",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u65b0\u5947\u5ca9\u793e\u6703\u4f4f\u5b85 ",
    "121.5034",
    "25.12317",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u842c\u83ef\u5340\u9f8d\u5c71\u5bfa\u806f\u958b\u5b85",
    "121.5016",
    "25.03541",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u8392\u5149\u793e\u6703\u4f4f\u5b85 ",
    "121.5",
    "25.03195",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u6587\u5c71\u5340\u842c\u9686\u7ad9\u793e\u6703\u4f4f\u5b85",
    "121.5386",
    "25.0029",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u5927\u540c\u5340\u660e\u502b\u793e\u6703\u4f4f\u5b85",
    "121.5199",
    "25.07326",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u6587\u5c71\u5340\u8208\u9686D2\u5340\u793e\u6703\u4f4f\u5b85",
    "121.5623",
    "24.98789",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u5317\u6295\u5340\u6d32\u7f8e\u793e\u6703\u4f4f\u5b85",
    "121.505",
    "25.10014",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u4e2d\u5c71\u5340\u884c\u5929\u5bae\u7ad9\u793e\u6703\u4f4f\u5b85",
    "121.5335",
    "25.05997",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u5ee3\u6148\u535a\u611b\u5712\u5340\u793e\u6703\u4f4f\u5b85(E\u57fa\u5730)",
    "121.5824",
    "25.03944",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u6587\u5c71\u5340\u6728\u67f5\u793e\u6703\u4f4f\u5b85",
    "121.5662",
    "24.98928",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u6587\u5c71\u5340\u8208\u9686D1\u5340\u793e\u6703\u4f4f\u5b85",
    "121.5578",
    "24.98836",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u6587\u5c71\u5340\u666f\u6587\u793e\u6703\u4f4f\u5b85",
    "121.5406",
    "24.98989",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u5357\u6e2f\u5340\u4e2d\u5357\u793e\u6703\u4f4f\u5b85",
    "121.619",
    "25.04282",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u5167\u6e56\u5340\u745e\u5149\u793e\u6703\u4f4f\u5b85",
    "121.579",
    "25.07336",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u5ee3\u6148\u535a\u611b\u5712\u5340(B\u57fa\u5730)-\u793e\u798f\u5927\u6a13",
    "121.5829",
    "25.03846",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u5167\u6e56\u5340\u6e2f\u5898\u806f\u958b\u5b85",
    "121.5753",
    "25.08032",
    "\u5df2\u5b8c\u5de5",
    "dot-finish",
  ],
  [
    "\u8208\u9686\u793e\u6703\u4f4f\u5b85I\u5340",
    "121.5612",
    "24.98694",
    "\u65bd\u5de5\u4e2d\u53ca\u5f85\u958b\u5de5",
    "dot-ongoing",
  ],
  [
    "\u798f\u661f\u793e\u6703\u4f4f\u5b85",
    "121.5065",
    "25.04701",
    "\u65bd\u5de5\u4e2d\u53ca\u5f85\u958b\u5de5",
    "dot-ongoing",
  ],
  [
    "\u7389\u6210\u793e\u6703\u4f4f\u5b85 ",
    "121.5827",
    "25.0485",
    "\u65bd\u5de5\u4e2d\u53ca\u5f85\u958b\u5de5",
    "dot-ongoing",
  ],
  [
    "\u6a1f\u65b0\u6c34\u5cb8\u793e\u6703\u4f4f\u5b85 ",
    "121.5564",
    "24.97746",
    "\u65bd\u5de5\u4e2d\u53ca\u5f85\u958b\u5de5",
    "dot-ongoing",
  ],
  [
    "\u57f9\u82f1\u793e\u6703\u4f4f\u5b85 ",
    "121.5486",
    "25.07977",
    "\u65bd\u5de5\u4e2d\u53ca\u5f85\u958b\u5de5",
    "dot-ongoing",
  ],
  [
    "\u820a\u5b97\u793e\u6703\u4f4f\u5b85 ",
    "121.5783",
    "25.06227",
    "\u65bd\u5de5\u4e2d\u53ca\u5f85\u958b\u5de5",
    "dot-ongoing",
  ],
  [
    "\u666f\u8c50\u4e00\u5340\u793e\u6703\u4f4f\u5b85  ",
    "121.5449",
    "25.00202",
    "\u65bd\u5de5\u4e2d\u53ca\u5f85\u958b\u5de5",
    "dot-ongoing",
  ],
  [
    "\u5ee3\u6148\u535a\u611b\u5712\u5340\u793e\u6703\u4f4f\u5b85(C\u57fa\u5730)",
    "121.5817",
    "25.03848",
    "\u65bd\u5de5\u4e2d\u53ca\u5f85\u958b\u5de5",
    "dot-ongoing",
  ],
  [
    "\u8208\u9686\u793e\u6703\u4f4f\u5b85E\u5340",
    "121.5591",
    "24.98814",
    "\u65bd\u5de5\u4e2d\u53ca\u5f85\u958b\u5de5",
    "dot-ongoing",
  ],
  [
    "\u767e\u9f61\u6c34\u5cb8\u793e\u6703\u4f4f\u5b85 ",
    "121.5144",
    "25.08014",
    "\u65bd\u5de5\u4e2d\u53ca\u5f85\u958b\u5de5",
    "dot-ongoing",
  ],
  [
    "\u677e\u4fe1\u793e\u6703\u4f4f\u5b85",
    "121.5717",
    "25.04251",
    "\u65bd\u5de5\u4e2d\u53ca\u5f85\u958b\u5de5",
    "dot-ongoing",
  ],
  [
    "\u9326\u5dde\u793e\u6703\u4f4f\u5b85",
    "121.5269",
    "25.05947",
    "\u65bd\u5de5\u4e2d\u53ca\u5f85\u958b\u5de5",
    "dot-ongoing",
  ],
  [
    "\u798f\u6c11\u793e\u6703\u4f4f\u5b85\u4e00\u671f",
    "121.4908",
    "25.0274",
    "\u65bd\u5de5\u4e2d\u53ca\u5f85\u958b\u5de5",
    "dot-ongoing",
  ],
  [
    "\u548c\u8208\u6c34\u5cb8\u793e\u6703\u4f4f\u5b85 ",
    "121.5491",
    "24.98477",
    "\u65bd\u5de5\u4e2d\u53ca\u5f85\u958b\u5de5",
    "dot-ongoing",
  ],
  [
    "\u7d93\u8cbf\u793e\u6703\u4f4f\u5b85",
    "121.6103",
    "25.05659",
    "\u65bd\u5de5\u4e2d\u53ca\u5f85\u958b\u5de5",
    "dot-ongoing",
  ],
  [
    "\u4e09\u8208\u793e\u6703\u4f4f\u5b85   ",
    "121.556",
    "25.02645",
    "\u65bd\u5de5\u4e2d\u53ca\u5f85\u958b\u5de5",
    "dot-ongoing",
  ],
  [
    "\u5357\u6e2f\u6a5f\u5ee0\u793e\u6703\u4f4f\u5b85",
    "121.5975",
    "25.05025",
    "\u65bd\u5de5\u4e2d\u53ca\u5f85\u958b\u5de5",
    "dot-ongoing",
  ],
  [
    "\u8208\u9686\u793e\u6703\u4f4f\u5b85A\u5340",
    "121.5598",
    "24.98791",
    "\u65bd\u5de5\u4e2d\u53ca\u5f85\u958b\u5de5",
    "dot-ongoing",
  ],
  [
    "\u798f\u570b\u793e\u6703\u4f4f\u5b85 ",
    "121.5138",
    "25.1021",
    "\u65bd\u5de5\u4e2d\u53ca\u5f85\u958b\u5de5",
    "dot-ongoing",
  ],
  [
    "\u83ef\u69ae\u5e02\u5834\u90fd\u66f4\u5206\u56de\u6236",
    "121.5224",
    "25.09644",
    "\u65bd\u5de5\u4e2d\u53ca\u5f85\u958b\u5de5",
    "dot-ongoing",
  ],
  [
    "\u516d\u5f35\u7281A\u3001B\u5340\u793e\u6703\u4f4f\u5b85 ",
    "121.5595",
    "25.02744",
    "\u65bd\u5de5\u4e2d\u53ca\u5f85\u958b\u5de5",
    "dot-ongoing",
  ],
  [
    "\u9752\u5e74\u793e\u6703\u4f4f\u5b85\u4e8c\u671f",
    "121.503",
    "25.02033",
    "\u65bd\u5de5\u4e2d\u53ca\u5f85\u958b\u5de5",
    "dot-ongoing",
  ],
  [
    "\u666f\u8c50\u4e8c\u5340\u793e\u6703\u4f4f\u5b85 ",
    "121.5449",
    "25.00201",
    "\u898f\u5283\u4e2d",
    "dot-planning",
  ],
  [
    "\u529b\u884c\u793e\u6703\u4f4f\u5b85",
    "121.5383",
    "25.0502",
    "\u898f\u5283\u4e2d",
    "dot-planning",
  ],
  [
    "\u91d1\u83ef\u7279\u56db\u884c\u653f\u5927\u6a13\u66a8\u7279\u4e94\u793e\u6703\u4f4f\u5b85",
    "121.5256",
    "25.03078",
    "\u898f\u5283\u4e2d",
    "dot-planning",
  ],
  [
    "\u5357\u6e2f\u6a5f\u5ee0\u5206\u69cb\u68df\u793e\u6703\u4f4f\u5b85",
    "121.5965",
    "25.05053",
    "\u898f\u5283\u4e2d",
    "dot-planning",
  ],
  [
    "\u8208\u9686\u793e\u6703\u4f4f\u5b85FH\u5340",
    "121.5611",
    "24.98739",
    "\u898f\u5283\u4e2d",
    "dot-planning",
  ],
  [
    "\u6771\u6e56\u793e\u6703\u4f4f\u5b85",
    "121.6133",
    "25.06709",
    "\u898f\u5283\u4e2d",
    "dot-planning",
  ],
  [
    "\u4fdd\u990a\u5ee0\u793e\u6703\u4f4f\u5b85",
    "121.5934",
    "25.0412",
    "\u898f\u5283\u4e2d",
    "dot-planning",
  ],
  [
    "\u798f\u6c11\u793e\u6703\u4f4f\u5b85\u4e8c\u671f",
    "121.491",
    "25.02758",
    "\u898f\u5283\u4e2d",
    "dot-planning",
  ],
  [
    "\u5947\u5ca9\u793e\u6703\u4f4f\u5b85",
    "121.5086",
    "25.12818",
    "\u898f\u5283\u4e2d",
    "dot-planning",
  ],
  [
    "\u50d1\u6cf0\u8208\u793e\u6703\u4f4f\u5b85",
    "121.6104",
    "25.05437",
    "\u898f\u5283\u4e2d",
    "dot-planning",
  ],
  [
    "\u6f6d\u7f8e\u570b\u5c0f\u57fa\u5730\u793e\u6703\u4f4f\u5b85",
    "121.5902",
    "25.06082",
    "\u898f\u5283\u4e2d",
    "dot-planning",
  ],
];

addhouse(house);