var SimpleHistogram = function(container, opts) {

  var NUMBER_OF_BINS = (opts) ? ((opts.bins) ? opts.bins : 20) : 20,

      BIN_WIDTH = Math.floor(jQuery(container).innerWidth() / NUMBER_OF_BINS),

      data = (opts) ? ((opts.data) ? opts.data : []) : [],

      containerEl = jQuery(container),

      /** Calculates the sum of all values within the specified interval [fromX, toX) **/
      sum = function(data, fromX, toX) {
        var sum = 0,

            valuesInInterval = jQuery.grep(data, function(value) {
              return (value.x >= fromX && value.x < toX);
            });

        jQuery.each(valuesInInterval, function(idx, value) {
          sum += value.y;
        });

        return sum;
      },

      /** Function to re-bin the histogram **/
      resample = function(data, numberOfBins) {
        var startX, endX, runningX, stepSize, i,
            bins = [];

        if (data.length > 0) {
          startX = data[0].x;
          endX = data[data.length - 1].x;

          // Note: can be zero in edge case length == 1
          stepSize = (endX - startX) / numberOfBins;

          for (i=0; i<numberOfBins; i++) {
            runningX = startX + stepSize * i;
            bins.push({
              x: runningX,
              y: sum(data, runningX, runningX + stepSize)
            });
          }

          return { stepSize: stepSize, bins: bins };
        }
      },

      /** Renders the histogram into the parent DOM element **/
      render = function(data) {
        var resampled = resample(data, NUMBER_OF_BINS),
            maxY = Math.max.apply(null, jQuery.map(resampled.bins, function(val) { return val.y; }));

        containerEl.empty();
        jQuery.each(resampled.bins, function(idx, bin) {
          var height = bin.y / maxY * 100,
              html = '<div class="histogram column" style="width:' + BIN_WIDTH + 'px" data-x="' + bin.x + '">' +
                     '  <div class="histogram bar" style="height: ' + height + '%"></div>' +
                     '</div>';

          containerEl.append(html);
        });
      };

  if (data)
    render(data);

  console.log('inner width: ' + jQuery(container).innerWidth());
  console.log('bins ' + NUMBER_OF_BINS);
  console.log('bin width: ' + BIN_WIDTH);

};
