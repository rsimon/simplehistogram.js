# simplehistogram.js

A simple histogram component.
[See it in action](http://rawgit.com/rsimon/simplehistogram.js/master/example.html).

## Usage

```javascript
<div id="histogram"></div>
```
```javascript
<script src="jquery.min.js"></script>
<script src="simplehistogram.min.js"></script>
<link rel="stylesheet" href="simplehistogram.css">
<script>
  // Data is an array of objects with an 'x' and a 'y' field
  var data = [
    { x: ..., y: ...},
    { x: ..., y: ...}
  ];

  jQuery(document).ready(function() {
    var histogram = new SimpleHistogram(document.getElementById('histogram'), {
      data: data
    });
  });
</script>
```

### Options

```javascript
jQuery(document).ready(function() {
  var histogram = new SimpleHistogram(document.getElementById('histogram'), {
    data: data,
    bins: 40, // number of bins

    // More to come

  });
});
```
