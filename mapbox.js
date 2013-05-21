function edit() {
    d3.event.preventDefault();
    d3.event.stopPropagation();
    var params = window.location.hash.substring(1).split('/'),
        mapId = window.location.href.match(/tiles\.mapbox\.com\/v3\/([^/]*)\//)[1];
    window.location.href = 'http://openstreetmap.us/iD/release/#map=' +
        params[0] + '/' + params[2] + '/' + params[1] +
        '&layer=custom:http://{switch:a,b,c,d}.tiles.mapbox.com/v3/' + mapId + '/{z}/{x}/{y}.png';
}

d3.select('.map-attribution')
    .text(function() { return d3.select(this).text() + ' '; })
    .append('a')
    .attr('href', 'http://openstreetmap.us/iD/release/')
    .text('Edit with iD')
    .on('click', edit);
