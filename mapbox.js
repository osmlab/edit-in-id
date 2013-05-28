function edit() {
    d3.event.preventDefault();
    d3.event.stopPropagation();
    var params = window.location.hash.substring(1).split('/');
    window.location.href = 'http://openstreetmap.us/iD/release/#map=' +
        params[0] + '/' + params[2] + '/' + params[1];
}

d3.select('.map-attribution')
    .text(function() { return d3.select(this).text() + ' '; })
    .append('a')
    .attr('href', 'http://openstreetmap.us/iD/master/')
    .text('Edit on OSM')
    .on('click', edit);
