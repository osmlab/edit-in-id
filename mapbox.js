function edit() {
    d3.event.preventDefault();
    d3.event.stopPropagation();
    var params = window.location.hash.substring(1).split('/'),
        mapId = window.location.href.match(/[v3|edit]\/([^/]*?)[#|\/]/)[1];
    window.location.href = 'http://openstreetmap.us/iD/release/#map=' +
        params[0] + '/' + params[2] + '/' + params[1];
}

d3.select('.map-attribution')
    .text(function() { return d3.select(this).text() + ' '; })
    .append('a')
    .attr('href', 'http://openstreetmap.us/iD/release/')
    .text('Edit with iD')
    .on('click', edit);
