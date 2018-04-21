var pafiumeColors = (function () {
  var colors = {
    infinity:    [ '#ACABB3', '#8E8C97', '#5F6062', '#24232A', ],
    soul:        [ '#B19CAA', '#94778B', '#4E344A', '#270722', ],
    cranberry:   [ '#FFAFAF', '#C95D63', '#803C40', '#462123', ],
    brick:       [ '#FF5D48', '#FF3A20', '#BA2B18', '#66180E', ],
    clementine:  [ '#FF8345', '#E36414', '#A6490F', '#7C370B', ],
    cashmere:    [ '#CCB793', '#B99C6B', '#8D775F', '#4D4134', ],
    amber:       [ '#FFDD7A', '#FFCA2E', '#BA9322', '#745C15', ],
    pea:         [ '#D5D881', '#739130', '#4A5D1F', '#103900', ],
    mint:        [ '#AEECCD', '#69A197', '#136F63', '#0B3D36', ],
    sky:         [ '#B1E4E4', '#74A4BC', '#557889', '#354B56', ],
    sea:         [ '#6BD5D3', '#17BEBB', '#2C8C99', '#29555D', ],
  };

  var colorNames = Object.keys(colors);

  var randomColorIndex = function () {
    return Math.floor(Math.random() * colors.length);
  }

  return function () {
    return {
      all: function () {
        return colorNames.map(function (color) {
          var hues = colors[color];
          return {
            name: color,
            hues,
          };
        });
      },
      get: function (name) {
        return colors[name];
      },
      random: function () {
        var name = colorNames[randomColorIndex()];
        return colors[name];
      },
    }
  };
})();
