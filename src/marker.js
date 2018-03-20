const mapbox = require('mapbox-gl');

const iconURLs = {
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png',
  activities: 'http://i.imgur.com/WbMOfMl.png'
};


const buildMarker = function(type, coords) {

	const markerDomEl = document.createElement('div'); // Create a new, detached DIV
		markerDomEl.style.width = '32px';
		markerDomEl.style.height = '39px';

  if (type === 'hotels') {
    markerDomEl.style.backgroundImage = `url(${iconURLs.hotels})`;
  }
  if (type === 'restaurants') {
    markerDomEl.style.backgroundImage = `url(${iconURLs.restaurants})`;
  }
  if (type === 'activities') {
    markerDomEl.style.backgroundImage = `url(${iconURLs.activities})`;
  }
  let newMap = new mapbox.Marker(markerDomEl).setLngLat(coords);
  return newMap;
};

module.exports = { buildMarker };
