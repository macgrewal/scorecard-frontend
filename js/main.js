$(document).ready(function () {

  $('[data-gauge]').each(function (index, element) {
    var id = element.id;
    var el = $(element);
    var colour = el.data('gauge');
    var description = el.data('gauge-description');
    var value = 0;
    var displayColour = 'N/A';

    switch (colour) {
      case 'red':
        value = 24;
        displayColour = 'Red';
        break;
      case 'amber':
        value = 49;
        displayColour = 'Amber';
        break;
      case 'green':
        value = 74;
        displayColour = 'Green';
        break;
      case 'blue':
        value = 100;
        displayColour = 'Blue';
        break;
    }

    function getLabel(val) {
      return "";
    }

    var chart = c3.generate({
      bindto: '#' + id,
      transition: {
        duration: 500
      },
      data: {
        columns: [
          [description, 0]
        ],
        type: 'gauge'
      },
      gauge: {
        label: {
          show: false
        }
      },
      color: {
        pattern: ['#e51c23', '#ff9800', '#4caf50', '#2196f3'], // the three color levels for the percentage values.
        threshold: {
          values: [25, 50, 75, 100]
        }
      },
      legend: {
        hide: true
      },
      onrendered: function () {
        $('svg g.c3-chart > g.c3-chart-arcs > g > text', el).text(displayColour)
      },
      tooltip: {
        show: false
      }
    });
    chart.load({
      columns: [
        [description, value]
      ],
    });
  });
});