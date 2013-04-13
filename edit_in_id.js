function edit() {
  d3.event.preventDefault();
  d3.event.stopPropagation();
  var match = anchor.attr('href').match(/lat=(.*)&lon=(.*)&zoom=(.*)/);
  window.location.href = 'http://openstreetmap.us/iD/release/#map=' + match[3] + '/' + match[2] + '/' + match[1];
};

var link = d3.select('#editmenu ul')
  .insert('li', ':first-child')
  .append('a')
  .attr('href', 'http://openstreetmap.us/iD/release/')
  .attr('class', 'geolink llz object')
  .attr('data-editor', 'iD')
  .text('Edit with iD')
  .on('click', edit);

var anchor = d3.select('#editanchor')
  .on('click', edit);
