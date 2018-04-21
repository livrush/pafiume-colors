var pafiumeColors = (function () {
  var colors = {
    infinity:    [ '#ACABB3', '#8E8C97', '#5F6062', '#24232A', ],
    soul:        [ '#B19CAA', '#94778B', '#4E344A', '#270722', ],
    cranberry:   [ '#FFAFAF', '#C95D63', '#803C40', '#462123', ],
    brick:       [ '#FF5D48', '#FF3A20', '#BA2B18', '#66180E', ],
    clementine:  [ '#FF8345', '#E36414', '#A6490F', '#7C370B', ],
    cashmere:    [ '#FDD692', '#B99C6B', '#8D775F', '#4D4134', ],
    amber:       [ '#FFE392', '#FFCA2E', '#BA9322', '#745C15', ],
    pea:         [ '#F3FF92', '#C6CA53', '#739130', '#103900', ],
    mint:        [ '#AEECCD', '#69A197', '#136F63', '#0B3D36', ],
    sky:         [ '#B1E4E4', '#74A4BC', '#717EC3', '#4A4E69', ],
    sea:         [ '#6BD5D3', '#17BEBB', '#2C8C99', '#29555D', ],
  };

  return function() {
    return {
      all: function() {
        const colorNames = Object.keys(colors);
        return colorNames.map(function(color) {
          const hues = colors[color];
          return {
            name: color,
            hues,
          };
        });
      }
    }
  };
})();
