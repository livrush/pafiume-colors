# Pafiume Colors

Random color scheme generator.

## Install

Using npm:

```
$ npm install pafiume-colors
```

Using yarn:

```
$ yarn add pafiume-colors
```

Using bower:

```
$ bower install pafiume-colors
```


## Load

From npm:

```js
const gimei = require('pafiume-colors');
```

From Bower:

```html
<script src="/bower_components/pafiume-colors/dist/gimei.min.js"></script>
```

The `pafiumeColors` Object loads into global scope from the above script.

## Usage

### pafiumeColors

The `pafiumeColors` Object contains multiple API to grab random colors:

```js
var color = pafiumeColors();
```

### random()

```js
color.random() //
```

### get(name)

Produces a specific color.

```js
color.get('infinity');
```

### scheme(quantity)

Produces an array of unique colors. Can produce quantity anywhere from 0 - total available colors.
* Unspecified quantity results in array of 1 color
* Negative number quantity results in array of 1 color
* Quantity greater than available colors results in array of all colors

```js
color.scheme(3);      // => [ {...}, {...}, {...} ];
color.scheme();       // => [ {...} ];
color.scheme(-3);     // => [ {...} ];
color.scheme(100);    // => [ {...} ... ];
```

### getAll()

Produces an array of all colors.

```js
color.getAll();
```

### Color Object

Each color Object produced by `pafiumeColors` has two properties
1. `name` - String representing name of color set
1. `hues` - Array containing hex color Strings, ordered light to dark

```js
{
  name: 'infinity',
  hues: [
    '#ACABB3',
    '#8E8C97',
    '#5F6062',
    '#24232A',
  ],
}
```
