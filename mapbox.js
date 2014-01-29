function edit() {
    d3.event.preventDefault();
    d3.event.stopPropagation();
    var params = window.location.hash.substring(1).split('/');
    window.location.href = 'http://www.openstreetmap.org/edit#map=' +
        params[0] + '/' + params[1] + '/' + params[2];
}

d3.select('body')
    .append('a')
    .attr('href', 'http://www.openstreetmap.org/edit')
    .attr('style', 'position:absolute;top:20px;right:10px;z-index:1000;font-weight:bold;')
    .text('Improve this map')
    .on('click', edit);
