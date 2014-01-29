function edit() {
    d3.event.preventDefault();
    d3.event.stopPropagation();
    var params = window.location.hash.substring(1).split('/');
    window.location.href = 'http://www.openstreetmap.org/edit#map=' +
        params[0] + '/' + params[1] + '/' + params[2];
}

d3.select('.mapbox-control-info')
    .text(function() { return d3.select(this).text() + ' '; })
    .append('a')
    .attr('href', 'http://www.openstreetmap.org/edit')
    .text('Improve this map')
    .on('click', edit);
