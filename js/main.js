$(document).ready(function () {

  $('[data-gauge]').each(function (index, element) {
    var id = element.id;
    var el = $(element);
    var colour = el.data('gauge');
    var description = el.data('gauge-description');
    var value = 0;

    switch (colour) {
      case '':
        value = 0;
        break;
      case 'red':
        value = 25;
        break;
      case 'amber':
        value = 50;
        break;
      case 'green':
        value = 75;
        break;
      case 'blue':
        value = 100;
        break;
    }

    function getLabel(val) {
      return "";
    }

    var g = new JustGage({
      id: id,
      value: value,
      title: description,
      textRenderer: getLabel,
      min: 0,
      max: 100,
      gaugeWidthScale: 0.65,
      levelColorsGradient: true,
      inverse: true,
      reverse: true,
      customSectors: {
        ranges: [{
          color: "#0000ff",
          lo: 1,
          hi: 25
        }, {
          color: "green",
          lo: 26,
          hi: 50
        }, {
          color: "orange",
          lo: 51,
          hi: 75
        }, {
          color: "red",
          lo: 76,
          hi: 100
        }]
      },
      // reverse: true,
      pointer: true,
      pointerOptions: {
        toplength: -15,
        bottomlength: 10,
        bottomwidth: 10,
        color: '#8e8e93',
        stroke: '#ffffff',
        stroke_width: 2,
        stroke_linecap: 'round'
      },
      counter: false,
      donut: true,
      relativeGaugeSize: true,
      textRenderer: getLabel,
      valueFontFamily: "Georgia"
    });

  });
});