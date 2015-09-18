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
  jQuery(document).ready(function() {
    var histogram = new SimpleHistogram(document.getElementById('histogram'));
  });
</script>
```

### Options

```javascript
jQuery(document).ready(function() {
  var histogram = new SimpleHistogram(document.getElementById('histogram'), {

    // TODO

  });
});
```

### API

```javascript
histogram.setData(/** TODO **/);
```
