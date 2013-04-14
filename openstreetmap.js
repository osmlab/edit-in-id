function params(str) {
    str = str.substring(str.indexOf('?') + 1);
    return str.split('&').reduce(function(obj, pair) {
        var parts = pair.split('=');
        if (parts.length === 2) {
            obj[parts[0]] = (null === parts[1]) ? '' : decodeURIComponent(parts[1]);
        }
        return obj;
    }, {});
}

function edit() {
    d3.event.preventDefault();
    d3.event.stopPropagation();
    var p = params(anchor.attr('href')),
        url = 'http://openstreetmap.us/iD/release/#map=' + p.zoom + '/' + p.lon + '/' + p.lat;

    if (p.node) {
        url += '&id=n' + p.node;
    } else if (p.way) {
        url += '&id=w' + p.way;
    }

    window.location.href = url;
}

d3.select('#editmenu ul')
    .insert('li', ':first-child')
    .append('a')
    .attr('href', 'http://openstreetmap.us/iD/release/')
    .attr('class', 'geolink llz object')
    .attr('data-editor', 'iD')
    .text('Edit with iD')
    .on('click', edit);

var anchor = d3.selectAll('#editanchor')
    .on('click', edit);
