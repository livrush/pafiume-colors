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
    return Math.floor(Math.random() * colorNames.length);
  };

  var doesNotExistInScheme = function (scheme, color) {
    var name = color.name;
    var scheme = scheme.map(color => color.name);
    return !scheme.includes(name);
  };

  var createColorObject = function (name, hues) {
    return { name, hues };
  }

  return {
    random: function () {
      var name = colorNames[randomColorIndex()];
      return createColorObject(name, colors[name]);
    },
    get: function (name) {
      if (!name) return this.random();
      var hues = colors[name];
      return createColorObject(name, hues);
    },
    scheme: function (number) {
      var counter = number > colorNames.length ? 11 : number;
      if (typeof number !== 'number') return [this.random()];
      if (number < 1) return [this.random()];
      if (number > colorNames.length) return this.all();
      var scheme = [];
      while (scheme.length < number) {
        var color = this.random();
        if (doesNotExistInScheme(scheme, color)) scheme.push(color);
      }
      return scheme;
    },
    all: function () {
      return this.getAll();
    },
    getAll: function () {
      return colorNames.map(function (name) {
        var hues = colors[name];
        return createColorObject(name, hues);
      });
    },
  };
})();

if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    module.exports = pafiumeColors;
}

if ( typeof module === "object" && typeof module.exports === "object" ) {
  module.exports = pafiumeColors;
}
